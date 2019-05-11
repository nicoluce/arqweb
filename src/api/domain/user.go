package domain

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Id          primitive.ObjectID `json:"id" bson:"_id" required:"false"`
	Password	string
}
