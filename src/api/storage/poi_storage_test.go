package storage

import (
	"github.com/fernetbalboa/arqweb/src/api/config"
	"github.com/fernetbalboa/arqweb/src/api/test"
	"github.com/stretchr/testify/assert"
	"testing"
)

func init()  {
	config.Scope = config.TestScope
}

func TestSaveGeoJsonFeature(t *testing.T) {
	storage := &POIStorageImpl{}
	pointFeature := test.DefaultGeoJsonFeature()

	savedPOI, err := storage.SaveFeature(pointFeature)

	assert.NoError(t, err)
	assert.Equal(t, pointFeature.PropertyMustString("title"), savedPOI.Title)
	assert.Equal(t, pointFeature.PropertyMustString("category"), savedPOI.Category)
	assert.Equal(t, pointFeature.PropertyMustString("description"), savedPOI.Description)
	assert.Equal(t, pointFeature.PropertyMustString("type"), savedPOI.Type)
	assert.Equal(t, pointFeature.Geometry.Point[0], savedPOI.Lat)
	assert.Equal(t, pointFeature.Geometry.Point[1], savedPOI.Long)
}
