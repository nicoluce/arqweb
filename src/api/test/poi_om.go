package test

import (
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/paulmach/go.geojson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func DefaultGeoJsonFeature() *geojson.Feature {
	geoJsonPoint := geojson.NewFeature(geojson.NewPointGeometry([]float64{50, 100}))
	geoJsonPoint.SetProperty("title", "testTitle")
	geoJsonPoint.SetProperty("category", "testCategory")
	geoJsonPoint.SetProperty("description", "testDescription")
	geoJsonPoint.SetProperty("type", "testType")

	return geoJsonPoint
}

func DefaultPOI() *domain.PointOfInterest {
	defGeoJson := DefaultGeoJsonFeature()
	return &domain.PointOfInterest{
		Id:          NewDocumentId(),
		Title:       defGeoJson.PropertyMustString("title", ""),
		Category:    defGeoJson.PropertyMustString("category", ""),
		Description: defGeoJson.PropertyMustString("description", ""),
		Type:        defGeoJson.PropertyMustString("type", ""),
		Lat:         defGeoJson.Geometry.Point[0],
		Long:        defGeoJson.Geometry.Point[1],
	}
}

func NewDocumentId() primitive.ObjectID {
	return primitive.NewObjectID()
}
