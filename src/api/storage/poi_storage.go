package storage

import (
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/paulmach/go.geojson"
)

type POIStorage interface {
	SavePOI(POI domain.PointOfInterest) (*domain.PointOfInterest, error)
	SaveFeature(feature geojson.Feature) (*domain.PointOfInterest, error)
}

type POIStorageImpl struct {

}

func NewPOIStorage() POIStorage {
	return &POIStorageImpl{}
}

func (ps *POIStorageImpl) SavePOI(POI domain.PointOfInterest) (*domain.PointOfInterest, error) {
	//TODO
	return nil, nil
}

func (ps *POIStorageImpl) SaveFeature(feature geojson.Feature) (*domain.PointOfInterest, error) {
	//TODO
	return nil, nil
}

