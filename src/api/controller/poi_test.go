package controller_test

import (
	"encoding/json"
	"github.com/fernetbalboa/arqweb/src/api/config"
	"github.com/fernetbalboa/arqweb/src/api/controller"
	"github.com/fernetbalboa/arqweb/src/api/mock"
	"github.com/fernetbalboa/arqweb/src/api/test"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"
)

func init() {
	config.Scope = config.TestScope
}

func TestAddPOI(t *testing.T) {
	ctrl := gomock.NewController(t)

	t.Run("Request is not GeoJson", func(t *testing.T) {
		//Given
		POIController := &controller.POIController{}
		badRequestBody := "{\"invalidField\": \"not a GeoJson\"}"

		r := config.ConfiguredRouter()
		r.POST("/poi", POIController.AddPOI)
		w := httptest.NewRecorder()
		req, _ := http.NewRequest("POST", "/poi", strings.NewReader(badRequestBody))

		//When
		r.ServeHTTP(w, req)

		//Then
		assert.Equal(t, http.StatusBadRequest, w.Code)
		assert.Equal(t, "{\"message\":\"There was a problem with the request\"," +
			"\"error\":\"bad_request\",\"status\":400,\"cause\":[\"Error parsing POI. It should be a GeoJson feature\"]}",
			w.Body.String())

	})

	t.Run("Add POI successfully", func(t *testing.T) {
		//Given
		storageMock := mock.NewMockPOIStorage(ctrl)
		POIController := &controller.POIController{POIStorage:storageMock}

		r := config.ConfiguredRouter()
		r.POST("/poi", POIController.AddPOI)
		w := httptest.NewRecorder()
		req, _ := http.NewRequest("POST", "/poi", strings.NewReader(test.DefaultGeoJsonFeatureString()))

		savedPOI := test.DefaultPOI()
		storageMock.EXPECT().SaveFeature(test.DefaultGeoJsonFeature()).Return(savedPOI, nil)

		//When
		r.ServeHTTP(w, req)

		//Then
		assert.Equal(t, http.StatusCreated, w.Code)
		respBody, _ := json.Marshal(savedPOI)

		assert.Equal(t, respBody,w.Body.Bytes())

	})
}

