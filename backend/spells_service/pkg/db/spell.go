package db

import (
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

func GetSpellsPipeline(id string) mongo.Pipeline {
	objectId, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		panic(err)
	}

	return mongo.Pipeline{
		{{"$match", bson.D{{"_id", objectId}}}},
		{{"$lookup", bson.D{
			{"from", "sources"},
			{"let", bson.D{{"spell_name", "$name"}, {"spell_source", "$source"}}},
			{"pipeline", mongo.Pipeline{
				{{"$addFields", bson.D{
					{"casters", bson.D{{"$getField", bson.D{
						{"field", "$$spell_source"},
						{"input", "$$ROOT"},
					}}}},
				}}},
				{{"$project", bson.D{
					{"_id", 0},
					{"spellData", bson.D{
						{"$filter", bson.D{
							{"input", bson.D{{"$objectToArray", "$casters"}}},
							{"as", "item"},
							{"cond", bson.D{
								{"$eq", bson.A{"$$item.k", "$$spell_name"}},
							}},
						}},
					}},
				}}},
				{{"$unwind", "$spellData"}},
				{{"$replaceRoot", bson.D{
					{"newRoot", "$spellData.v"},
				}}},
			}},
			{"as", "casters"},
		}}},
		{{"$addFields", bson.D{
			{"casters", bson.D{{"$arrayElemAt", bson.A{"$casters.class", 0}}}},
		}}},
		{{"$project", bson.D{
			{"_id", 0}, // Exclude the _id field from the output
			{"name", 1},
			{"level", 1},
			{"source", 1},
			{"page", 1},
			{"school", 1},
			{"components", 1},
			{"entries", 1},
			{"entriesHigherLevel", 1},
			{"casters", 1},
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
			{"concentration", bson.D{
				{"$cond", bson.A{
					bson.D{{"$ifNull", bson.A{"$duration.concentration", false}}},
					"true",
					"false",
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
		}}},
	}

}
