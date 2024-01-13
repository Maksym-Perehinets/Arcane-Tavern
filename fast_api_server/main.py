from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database.database import engine, get_db
from database import models


app = FastAPI()

models.Base.metadata.create_all(bind=engine)


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/dbtest")
async def dbtest(db: Session = Depends(get_db)):
	return {"status": "success", "data": db}


@app.get("/test")
async def test():
    return {"name": "Acid Splash",
			"source": "PHB",
			"page": 211,
			"srd": "true",
			"basicRules": "true",
			"level": 0,
			"school": "C",
			"time": [
				{
					"number": 1,
					"unit": "action"
				}
			],
			"range": {
				"type": "point",
				"distance": {
					"type": "feet",
					"amount": 60
				}
			},
			"components": {
				"v": "true",
				"s": "true"
			},
			"duration": [
				{
					"type": "instant"
				}
			],
			"entries": [
				"You hurl a bubble of acid. Choose one creature you can see within range, or choose two creatures you can see within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take {@damage 1d6} acid damage.",
				"This spell's damage increases by {@dice 1d6} when you reach 5th level ({@damage 2d6}), 11th level ({@damage 3d6}), and 17th level ({@damage 4d6})."
			],
			"scalingLevelDice": {
				"label": "acid damage",
				"scaling": {
					"1": "1d6",
					"5": "2d6",
					"11": "3d6",
					"17": "4d6"
				}
			},
			"damageInflict": [
				"acid"
			],
			"savingThrow": [
				"dexterity"
			],
			"miscTags": [
				"SCL",
				"SGT"
			],
			"areaTags": [
				"ST",
				"MT"
			]}
