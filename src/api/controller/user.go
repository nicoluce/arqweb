package controller

import (
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/fernetbalboa/arqweb/src/api/storage"
	"github.com/gin-gonic/gin"
	log "github.com/sirupsen/logrus"
	"net/http"
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

func (uc *UserController) Signup(c *gin.Context) {
	var userData domain.User
	err := c.ShouldBindJSON(&userData)

	if err != nil {
		apiError := apierror.BadRequest.Wrapf(err, "Error parsing User")
		_ = c.Error(apiError)
		return
	}

	log.Infof("Processing login for user: %v", userData.Username)

	user, err := uc.UserStorage.Search(userData.Username)

	if err != nil {
		_ = c.Error(err)
		return
	}
	if user != nil {
		c.JSON(http.StatusForbidden, "Username already exists")
	}
	userData.IsAdmin = false
	user, err = uc.UserStorage.SaveUser(&userData)
	if err != nil {
		_ = c.Error(err)
		return
	}
	c.JSON(http.StatusCreated, "user created")
}


func (uc *UserController) Login(c *gin.Context) {
	var userData domain.User
	err := c.ShouldBindJSON(&userData)

	if err != nil {
		apiError := apierror.BadRequest.Wrapf(err, "Error parsing User")
		_ = c.Error(apiError)
		return
	}

	log.Infof("Processing login for user id: %v", userData.Id)

	user, err := uc.UserStorage.Search(userData.Username)

	if err != nil {
		_ = c.Error(err)
		return
	}

	if user.Password == userData.Password {
		c.JSON(http.StatusOK, user)
	}
	c.JSON(http.StatusForbidden, "")
}
