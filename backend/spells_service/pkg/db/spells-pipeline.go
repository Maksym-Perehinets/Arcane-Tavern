package db

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var SpellsBasePipeline = mongo.Pipeline{
	{{"$project", bson.D{
		{"level", 1},
		{"name", 1},
		{"concentration", bson.D{
			{"$cond", bson.A{
				bson.D{{"$ifNull", bson.A{"$duration.concentration", false}}},
				"true",
				"false",
			}},
		}},
		{"duration", bson.D{
			{"$arrayElemAt", bson.A{
				bson.D{
					{"$map", bson.D{
						{"input", "$duration"},
						{"as", "dur"},
						{"in", bson.D{
							{"$cond", bson.A{
								bson.D{{"$ifNull", bson.A{"$$dur.duration", false}}},
								bson.D{{"$concat", bson.A{
									bson.D{{"$toString", "$$dur.duration.amount"}},
									" ",
									"$$dur.duration.type",
								}}},
								"$$dur.type",
							}},
						}},
					}},
				},
				0,
			}},
		}},
		{"time", bson.D{
			{"$arrayElemAt", bson.A{
				bson.D{
					{"$map", bson.D{
						{"input", "$time"},
						{"as", "t"},
						{"in", bson.D{
							{"$concat", bson.A{
								bson.D{{"$toString", "$$t.number"}},
								" ",
								"$$t.unit",
							}},
						}},
					}},
				},
				0,
			}},
		}},
		{"ranges", bson.D{
			{"$cond", bson.A{
				bson.D{{"$ifNull", bson.A{"$range.distance.amount", false}}},
				bson.D{{"$concat", bson.A{
					bson.D{{"$toString", "$range.distance.amount"}},
					" ",
					"$range.distance.type",
				}}},
				"$range.distance.type",
			}},
		}},
		{"spell_url", bson.D{
			{"$concat", bson.A{
				"/api/v1/spells/single/",
				bson.D{{"$toString", "$_id"}},
			}},
		}},
		{"_id", 0}, // Exclude the _id field from the output
	}}},
}
