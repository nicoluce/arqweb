package storage

import (
	"context"
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/paulmach/go.geojson"
	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
	"time"
)

type POIStorage interface {
	SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error)
	SaveFeature(feature *geojson.Feature) (*domain.PointOfInterest, error)
}

const(
	Database = "arqweb"
	POICollection = "poi"
)

func init() {
	resetPoiCollection() //Comment if data should be kept between program runs
}

type POIStorageImpl struct {
	mongoClient *mongo.Client
}

func CreatePOIStorage(client *mongo.Client) (POIStorage, error) {
	storage := &POIStorageImpl{
		mongoClient:client,
	}

	return storage, nil
}

func NewPOIStorage() (POIStorage, error) {
	client, err := getMongoDBClient()

	if err != nil {
		return nil, err
	}

	return CreatePOIStorage(client)
}

func getMongoDBClient() (*mongo.Client, error) {
	ctx, _ := context.WithTimeout(context.Background(), 10 * time.Second)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))

	if err != nil {
		return nil, apierror.Wrap(err, "Could not connect to MongoDB")
	}

	ctx, _ = context.WithTimeout(context.Background(), 10 * time.Second)
	err = client.Ping(ctx, readpref.Primary())

	if err != nil {
		return nil, apierror.Wrapf(err, "MongoDB client did not respond to ping")
	}

	return client, nil
}

func (ps *POIStorageImpl) SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error) {

	POICollection := ps.mongoClient.Database(Database).Collection(POICollection)

	ctx, _ := context.WithTimeout(context.Background(), 1 * time.Second)
	res, err := POICollection.InsertOne(ctx, POI)

	if err != nil {
		return nil, apierror.Wrapf(err, "Could not insert new POI into MongoDB. POI: %+v", POI)
	}

	POI.Id = res.InsertedID.(primitive.ObjectID)

	return POI, nil
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
			Title:title,
			Category:category,
			Description:description,
			Type:POIType,
			Lat:lat,
			Long:long,
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
	ctx, _ := context.WithTimeout(context.Background(), 5 * time.Second)

	err = client.Database(Database).Collection(POICollection).Drop(ctx)

	if err != nil {
		log.Error("Could not reset POI MongoDB collection")
	}
}

