package storage

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/paulmach/go.geojson"
)

type POIStorage interface {
	SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error)
	SaveFeature(feature *geojson.Feature) (*domain.PointOfInterest, error)
}

type POIStorageImpl struct {

}

func NewPOIStorage() POIStorage {
	return &POIStorageImpl{}
}

func (ps *POIStorageImpl) SavePOI(POI *domain.PointOfInterest) (*domain.PointOfInterest, error) {
	//TODO
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

