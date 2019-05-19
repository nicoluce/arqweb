package storage

import (
	"context"
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/paulmach/go.geojson"
	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"time"
)

//go:generate mockgen -destination=../mock/mock_poi_storage.go -package=mock -source=poi_storage.go -imports geojson=github.com/paulmach/go.geojson
type POIStorage interface {
	SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error)
	EditPOI(newVersionPOI *domain.PointOfInterest) error
	SaveFeature(feature *geojson.Feature) (*domain.PointOfInterest, error)
	SearchPOI(filters *domain.POIFilter) ([]*domain.PointOfInterest, error)
	GetCategories() ([]domain.Category, error)
	SearchCategory(filters *domain.CategoryFilter) ([]*domain.Category, error)
	AddCategory(category *domain.Category) error
	EditCategory(newVersionCategory *domain.Category) error
}

const (
	Database           = "arqweb"
	POICollection      = "poi"
	CategoryCollection = "categories"
)

func init() {
	resetPoiCollection() //Comment if data should be kept between program runs
}

type POIStorageImpl struct {
	poiCollection ICollection
	catCollection ICollection
}

func CreatePOIStorage(POIcollection ICollection, catCollection ICollection) (POIStorage, error) {
	storage := &POIStorageImpl{
		poiCollection: POIcollection,
		catCollection: catCollection,
	}

	return storage, nil
}

func NewPOIStorage() (POIStorage, error) {
	client, err := getMongoDBClient()
	poiCollection := client.Database(Database).Collection(POICollection)
	catCollection := client.Database(Database).Collection(CategoryCollection)
	if err != nil {
		return nil, err
	}

	return CreatePOIStorage(poiCollection, catCollection)
}

func getMongoDBClient() (*mongo.Client, error) {
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

	if err != nil {
		return nil, apierror.Wrap(err, "Could not connect to MongoDB")
	}
	log.Info("Succesfully connected to MonGoDB database")

	ctx, _ = context.WithTimeout(context.Background(), 5*time.Second)
	err = client.Ping(ctx, readpref.Primary())

	if err != nil {
		return nil, apierror.Wrapf(err, "MongoDB client did not respond to ping")
	}

	return client, nil
}

func (ps *POIStorageImpl) SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error) {

	POI.Id = primitive.NewObjectID()
	ctx, _ := context.WithTimeout(context.Background(), 1*time.Second)
	res, err := ps.poiCollection.InsertOne(ctx, POI)

	if err != nil {
		return nil, apierror.Wrapf(err, "Could not insert new POI into MongoDB. POI: %+v", POI)
	}

	POI.Id = res.InsertedID.(primitive.ObjectID)

	return POI, nil
}

func (ps *POIStorageImpl) EditPOI(newVersionPOI *domain.PointOfInterest) error {
	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	log.Infof("Updating POI '%s'", newVersionPOI.Id)

	// set filters and updates
	filter := bson.M{"_id": newVersionPOI.Id}
	update := bson.M{"$set": newVersionPOI}

	// update document
	_, err := ps.catCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		return apierror.Wrapf(err, "Couldn't update POI with id: '%s'", newVersionPOI.Id)
	}

	log.Infof("POI '%s' successfully updated", newVersionPOI.Id)
	return nil
}

func (ps *POIStorageImpl) SaveFeature(feature *geojson.Feature) (*domain.PointOfInterest, error) {
	POI, err := ps.featureToPOI(feature)
	if err != nil {
		return nil, apierror.Wrapf(err,
			"Could not convert GeoJson feature to POI. Feature: %+v", feature)
	}

	return ps.SavePOI(POI)
}

func (ps *POIStorageImpl) featureToPOI(feature *geojson.Feature) (*domain.PointOfInterest, error) {
	title, err := feature.PropertyString("title")
	if err != nil {
		return nil, apierror.BadRequest.Wrapf(err,
			"GeoJson feature 'title' property is missing or has incorrect type (should be string)")
	}

	category, err := feature.PropertyString("category")
	if err != nil {
		return nil, apierror.BadRequest.Wrapf(err,
			"GeoJson feature 'category' property is missing or has incorrect type (should be string)")
	}

	//Not required
	description := feature.PropertyMustString("description", "")

	POIType, err := feature.PropertyString("type")
	if err != nil {
		return nil, apierror.BadRequest.Wrapf(err,
			"GeoJson feature 'type' property is missing or has incorrect type (should be string)")
	}

	if feature.Geometry.IsPoint() {
		lat := feature.Geometry.Point[0]
		long := feature.Geometry.Point[1]
		//long
		POI := &domain.PointOfInterest{
			Title:       title,
			Category:    category,
			Description: description,
			Type:        POIType,
			Lat:         lat,
			Long:        long,
		}
		return POI, nil
	}

	return nil, apierror.BadRequest.New("Only GeoJson Point feature is currently supported")

}

func resetPoiCollection() {
	client, err := getMongoDBClient()

	if err != nil {
		return
	}
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	err = client.Database(Database).Collection(POICollection).Drop(ctx)

	if err != nil {
		log.Error("Could not reset POI MongoDB collection")
	}
}

func (ps *POIStorageImpl) SearchPOI(filters *domain.POIFilter) ([]*domain.PointOfInterest, error) {
	if filters == nil {
		filters = &domain.POIFilter{}
	}

	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	findOptions := options.Find()
	findOptions.SetLimit(filters.Limit)

	queryFilters := buildPOIQueryFilters(filters)
	resCursor, err := ps.poiCollection.Find(ctx, queryFilters, findOptions)

	if err != nil {
		return []*domain.PointOfInterest{}, apierror.Wrapf(err, "Could not find POIs using filters %+v", filters)
	}

	defer resCursor.Close(ctx)

	//noinspection GoPreferNilSlice
	results := []*domain.PointOfInterest{}
	for resCursor.Next(ctx) {
		var POI domain.PointOfInterest
		err = resCursor.Decode(&POI)
		if err != nil {
			log.Errorf("Error while decoding POI. Cause: %v", err)
		} else {
			results = append(results, &POI)
		}
	}

	return results, nil

}

func (ps *POIStorageImpl) GetCategories() ([]domain.Category, error) {

	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	resCursor, err := ps.catCollection.Find(ctx, bson.M{})

	if err != nil {
		return []domain.Category{}, apierror.Wrapf(err, "Could not retrieve list of categories")
	}

	defer resCursor.Close(ctx)

	results := []domain.Category{}
	for resCursor.Next(ctx) {
		var cat domain.Category
		err = resCursor.Decode(&cat)
		if err != nil {
			log.Errorf("Error while decoding Category. Cause: %v", err)
		} else {
			results = append(results, cat)
		}
	}

	return results, nil
}

func (ps *POIStorageImpl) SearchCategory(filters *domain.CategoryFilter) ([]*domain.Category, error) {
	if filters == nil {
		filters = &domain.CategoryFilter{}
	}

	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	findOptions := options.Find()
	findOptions.SetLimit(filters.Limit)

	queryFilters := buildCategoryQueryFilters(filters)
	resCursor, err := ps.catCollection.Find(ctx, queryFilters, findOptions)

	if err != nil {
		return nil, apierror.Wrapf(err, "Could not find any category using filters %+v", filters)
	}

	defer resCursor.Close(ctx)

	//noinspection GoPreferNilSlice
	results := []*domain.Category{}
	for resCursor.Next(ctx) {
		var cat domain.Category
		err = resCursor.Decode(&cat)
		if err != nil {
			log.Errorf("Error while decoding category. Cause: %v", err)
		} else {
			results = append(results, &cat)
		}
	}

	return results, nil

}

func (ps *POIStorageImpl) AddCategory(category *domain.Category) error {
	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	log.Infof("Adding category %s", category.Name)
	_, err := ps.catCollection.InsertOne(ctx, category)

	if err != nil {
		return apierror.Wrapf(err, "Couldn't add '%s' to categories list", category.Name)
	}

	return nil
}

func (ps *POIStorageImpl) EditCategory(newVersionCategory *domain.Category) error {
	ctx, _ := context.WithTimeout(context.Background(), 3*time.Second)

	log.Infof("Updating category '%s'", newVersionCategory.Id)

	// set filters and updates
	filter := bson.M{"_id": newVersionCategory.Id}
	update := bson.M{"$set": newVersionCategory}

	// update document
	_, err := ps.catCollection.UpdateOne(ctx, filter, update)
	if err != nil {
		return apierror.Wrapf(err, "Couldn't update category with id: '%s'", newVersionCategory.Id)
	}

	log.Infof("Category '%s' successfully updated", newVersionCategory.Id)
	return nil
}

func buildCategoryQueryFilters(filters *domain.CategoryFilter) bson.M {
	filtersMap := bson.M{}
	if filters.Name != "" {
		filtersMap["name"] = filters.Name
	}
	filtersMap["hidden"] = filters.Hidden

	return filtersMap
}

func buildPOIQueryFilters(filters *domain.POIFilter) bson.M {
	filtersMap := bson.M{}
	if filters.Category != "" {
		filtersMap["category"] = filters.Category
	}

	if filters.Title != "" {
		filtersMap["title"] = filters.Title
	}

	if filters.Bound {
		filtersMap["lat"] = bson.M{
			"$gte": filters.MinLat,
			"$lte": filters.MaxLat,
		}

		filtersMap["long"] = bson.M{
			"$gte": filters.MinLong,
			"$lte": filters.MaxLong,
		}
	}

	if filters.Title != "" {
		filtersMap["title"] = filters.Title
	}

	return filtersMap
}
