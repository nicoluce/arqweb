package storage

import (
	"context"
	"github.com/fernetbalboa/arqweb/src/api/apierror"
	"github.com/fernetbalboa/arqweb/src/api/domain"
	log "github.com/sirupsen/logrus"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"time"
)

//go:generate mockgen -destination=../mock/mock_user_storage.go -package=mock -source=user_storage.go
type UserStorage interface {
	SaveUser(POI *domain.User) (*domain.User, error)
	Search(userID primitive.ObjectID) (*domain.User, error)
}

const (
	UserCollection = "user"
)

func init() {
	resetUserCollection() //Comment if data should be kept between program runs
}

type UserStorageImpl struct {
	UserCollection ICollection
}

func CreateUserStorage(UserCollection ICollection) (UserStorage, error) {
	storage := &UserStorageImpl{
		UserCollection: UserCollection,
	}

	return storage, nil
}

func NewUserStorage() (UserStorage, error) {
	client, err := getMongoDBClient()
	UserCollection := client.Database(Database).Collection(UserCollection)
	if err != nil {
		return nil, err
	}

	return CreateUserStorage(UserCollection)
}

func (ps *UserStorageImpl) SaveUser(User *domain.User) (*domain.User, error) {
	User.Id = primitive.NewObjectID()
	ctx, _ := context.WithTimeout(context.Background(), 1*time.Second)
	res, err := ps.UserCollection.InsertOne(ctx, User)

	if err != nil {
		return nil, apierror.Wrapf(err, "Could not insert new User into MongoDB. User: %+v", User)
	}

	User.Id = res.InsertedID.(primitive.ObjectID)

	return User, nil
}


func (ps *UserStorageImpl) Search(userID primitive.ObjectID ) (*domain.User, error) {
	return nil, nil
}

func resetUserCollection() {
	client, err := getMongoDBClient()

	if err != nil {
		return
	}
	ctx, _ := context.WithTimeout(context.Background(), 5*time.Second)

	err = client.Database(Database).Collection(UserCollection).Drop(ctx)

	if err != nil {
		log.Error("Could not reset User MongoDB collection")
	}
}
