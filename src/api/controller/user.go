package controller

import (
	"crypto"
	"crypto/md5"
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/gin-gonic/gin"
	"net/http"
	log "github.com/sirupsen/logrus"
)

type UserController struct {
	UserStorage storage.UserStorage
}

func CreateUserController(userStorage storage.UserStorage) *UserController {
	return &UserController{
		UserStorage: userStorage,
	}
}

func NewUserController() (*UserController, error) {
	userStorage, err := storage.NewUserStorage()
	if err != nil {
		return nil, apierror.Wrapf(err, "Could not create User controller")
	}

	return CreateUserController(userStorage), nil
}

func (pc *UserController) Login(c *gin.Context) {
	var userData domain.User
	err := c.ShouldBindJSON(&userData)

	if err != nil {
		apiError := apierror.BadRequest.Wrapf(err, "Error parsing User")
		_ = c.Error(apiError)
		return
	}

	log.Infof("Processing login for user id: %v", userData.Id)

	user, err := pc.UserStorage.Search(userData.Id)

	if err != nil {
		_ = c.Error(err)
		return
	}
	password := md5.Sum([]byte(userData.Password))
	if password == []byte(user.Password) {
		c.JSON(http.StatusOK, user)
	}
	c.JSON(http.StatusForbidden, "")
}
