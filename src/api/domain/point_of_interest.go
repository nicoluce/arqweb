package domain

type PointOfInterest struct {
	Title       string
	Category    string
	OwnerId     int64
	Description string
	Type        string
	Lat         float64
	Long        float64
}
