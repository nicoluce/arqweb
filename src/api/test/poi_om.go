package test

import (
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

func NewDocumentId() primitive.ObjectID{
	return primitive.NewObjectID()
}
