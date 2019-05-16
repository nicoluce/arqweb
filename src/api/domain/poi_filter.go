package domain

type POIFilter struct {
	Title    string  `form:"title"`
	Category string  `form:"category"`
	Limit    int64   `form:"limit"`
	MaxLat   float64 `form:"maxLat"`
	MaxLong  float64 `form:"maxLong"`
	MinLat   float64 `form:"minLat"`
	MinLong  float64 `form:"minLong"`
	Bound    bool    `form:"bound"`
}
