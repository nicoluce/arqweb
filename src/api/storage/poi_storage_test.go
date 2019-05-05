package storage_test

import (
	"github.com/fernetbalboa/arqweb/src/api/config"
	"github.com/fernetbalboa/arqweb/src/api/mock"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/fernetbalboa/arqweb/src/api/test"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/mongo"
	"testing"
)

func init() {
	config.Scope = config.TestScope
}

func TestSaveGeoJsonFeature(t *testing.T) {
	//Given
	ctrl := gomock.NewController(t)
	poiCollectionMock := mock.NewMockICollection(ctrl)
	POIStorage, _ := storage.CreatePOIStorage(poiCollectionMock)
	pointFeature := test.DefaultGeoJsonFeature()

	documentId := test.NewDocumentId()
	poiCollectionMock.EXPECT().InsertOne(gomock.Any(), gomock.Any()).Return(&mongo.InsertOneResult{
		InsertedID: documentId,
	}, nil)

	//When
	savedPOI, err := POIStorage.SaveFeature(pointFeature)

	//Then
	assert.NoError(t, err)
	assert.Equal(t, documentId, savedPOI.Id)
	assert.Equal(t, pointFeature.PropertyMustString("title"), savedPOI.Title)
	assert.Equal(t, pointFeature.PropertyMustString("category"), savedPOI.Category)
	assert.Equal(t, pointFeature.PropertyMustString("description"), savedPOI.Description)
	assert.Equal(t, pointFeature.PropertyMustString("type"), savedPOI.Type)
	assert.Equal(t, pointFeature.Geometry.Point[0], savedPOI.Lat)
	assert.Equal(t, pointFeature.Geometry.Point[1], savedPOI.Long)
}

func TestSearchByCategory(t *testing.T) {
	//Given
	/*ctrl := gomock.NewController(t)
	poiCollectionMock := mock.NewMockICollection(ctrl)
	POIStorage, _ := storage.CreatePOIStorage(poiCollectionMock)
	pointFeature := test.DefaultGeoJsonFeature()


	documentId := test.NewDocumentId()*/

	//When

	//Then
}
