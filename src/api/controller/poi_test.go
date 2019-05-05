package controller_test

import (
	"github.com/fernetbalboa/arqweb/src/api/config"
	"github.com/fernetbalboa/arqweb/src/api/controller"
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
	//ctrl := gomock.NewController(t)
	r := config.ConfiguredRouter()

	t.Run("Request is not geojson", func(t *testing.T) {
		//Given
		POIcontroller := &controller.POIController{}
		badRequestBody := "{\"invalidField\": \"not a GeoJson\"}"

		r.POST("/poi", POIcontroller.AddPOI)
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


}