package controller

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/gin-gonic/gin"
	"github.com/paulmach/go.geojson"
	log "github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

const DefaultSearchLimit int64 = 20

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

func (pc *POIController) SearchPOI(c *gin.Context) {
	category := c.Query("category")
	limit, err := strconv.ParseInt(c.Query("limit"), 10, 64)

	if err != nil {
		limit = DefaultSearchLimit
	}

	if category == "" {
		err := apierror.BadRequest.Newf("POI search is only available by category. No category was provided")
		_ = c.Error(err)
		return
	}

	log.Infof("Searching POIs for request: %s", c.Request.URL)

	POIs, err := pc.POIStorage.SearchByCategory(category, limit)

	if err != nil {
		_ = c.Error(err)
		return
	}

	c.JSON(http.StatusOK, POIs)

}


