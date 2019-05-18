package controller

import (
	"encoding/json"
	"github.com/fernetbalboa/arqweb/src/api/config"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	"github.com/fernetbalboa/arqweb/src/api/mock"
	"github.com/fernetbalboa/arqweb/src/api/test"
	"github.com/golang/mock/gomock"
	"github.com/stretchr/testify/assert"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strconv"
	"strings"
	"testing"
)

func init() {
	config.Scope = config.TestScope
}

func TestAddUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()
	addUserEndpoint := "/user/signup"

	t.Run("Add User successfully", func(t *testing.T) {
		//Given
		storageMock := mock.NewMockUserStorage(ctrl)
		userController := &UserController{UserStorage: storageMock}

		r := config.ConfiguredRouter()
		r.POST(addUserEndpoint, userController.Signup)
		w := httptest.NewRecorder()
		req, _ := http.NewRequest("POST", addUserEndpoint, strings.NewReader(test.DefaultUserString()))

		savedUser := test.DefaultUser()
		storageMock.EXPECT().SaveUser(test.DefaultUser()).Return(savedUser, nil)

		//When
		r.ServeHTTP(w, req)

		//Then
		assert.Equal(t, http.StatusCreated, w.Code)
		respBody, _ := json.Marshal(savedUser)

		assert.Equal(t, respBody, w.Body.Bytes())

	})
}

func TestSearchUser(t *testing.T) {
	ctrl := gomock.NewController(t)
	defer ctrl.Finish()
	loginEndpoint := "/user/login"

	t.Run("Login successfully", func(t *testing.T) {
		//Given
		storageMock := mock.NewMockUserStorage(ctrl)
		UserController := &UserController{UserStorage: storageMock}

		r := config.ConfiguredRouter()
		r.GET(loginEndpoint, UserController.Login)
		w := httptest.NewRecorder()
		req, _ := http.NewRequest("GET", loginEndpoint, strings.NewReader(test.DefaultUserString()))

		savedUser := test.DefaultUser()

		storageMock.EXPECT().Search(savedUser.Username).Return(savedUser, nil)

		//When
		r.ServeHTTP(w, req)

		//Then
		assert.Equal(t, http.StatusOK, w.Code)
		respBody, _ := json.Marshal(savedUser)

		assert.Equal(t, respBody, w.Body.Bytes())

	})
}