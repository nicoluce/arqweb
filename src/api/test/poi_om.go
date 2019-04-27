package test

import "github.com/paulmach/go.geojson"

func DefaultGeoJsonFeature() *geojson.Feature {
	geoJsonPoint := geojson.NewFeature(geojson.NewPointGeometry([]float64{50, 100}))
	geoJsonPoint.SetProperty("title", "testTitle")
	geoJsonPoint.SetProperty("category", "testCategory")
	geoJsonPoint.SetProperty("description", "testDescription")
	geoJsonPoint.SetProperty("type", "testType")

	return geoJsonPoint
}
