package domain

import "go.mongodb.org/mongo-driver/bson/primitive"

type PointOfInterest struct {
	Id          primitive.ObjectID `json:"id" bson:"_id" required:"false"`
	Title       string             `json:"title" bson:"title" required:"true"`
	Category    Category           `json:"category" bson:"category" required:"true"`
	Image       Image              `json:"image" bson:"image" required:"false"`
	OwnerId     int64              `json:"ownerId" bson:"ownerId" required:"false"`
	Description string             `json:"description" bson:"description" required:"false"`
	Lat         float64            `json:"lat" bson:"lat" required:"false"`
	Long        float64            `json:"long" bson:"long" required:"false"`
	Hidden      bool               `json:"hidden" bson:"hidden" required:"false"`
}

type Image struct {
	Filename    string `json:"name"`
	Data        string `json:"data"` //bytes are encoded in Base64
	ContentType string `json:"content_type"`
}
