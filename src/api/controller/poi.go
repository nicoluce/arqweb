package controller

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/gin-gonic/gin"
	"github.com/paulmach/go.geojson"
	log "github.com/sirupsen/logrus"
	"net/http"
)

type POIController struct {
	POIStorage storage.POIStorage
}

func CreatePOIController(POIStorage storage.POIStorage) *POIController{
	return &POIController{
		POIStorage:POIStorage,
	}
}

func NewPOIController() (*POIController, error) {
	POIStorage, err := storage.NewPOIStorage()
	if err != nil {
		return nil, apierror.Wrapf(err, "Could not create POI controller")
	}

	return CreatePOIController(POIStorage), nil
}

func (pc *POIController) AddPOI(c *gin.Context) {
	var geoJsonFeature geojson.Feature
	if err := c.ShouldBindJSON(&geoJsonFeature); err != nil {
		apiError := apierror.BadRequest.Wrapf(err, "Error parsing POI. It should be a GeoJson feature")
		_ = c.Error(apiError)
		return
	}

	log.Infof("Adding new POI: %+v", geoJsonFeature)

	savedPOI, err := pc.POIStorage.SaveFeature(&geoJsonFeature)

	if err != nil {
		_ = c.Error(err)
		return
	}

	c.JSON(http.StatusCreated, savedPOI)

}
