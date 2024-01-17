from fastapi import FastAPI, Depends, responses, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database.database import engine, get_db
from database import models
from . import schemas





app = FastAPI()
models.Base.metadata.create_all(bind=engine)


origins = [
    "http://localhost"
    "http://localhost:5500",
	"http://127.0.0.1:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

"""
To run server pleas enter the following command 
cd directory/to/your/practice/file 
then enter
uvicorn fast_api_server.main:app --reload
beforehand you must have installed venv and all requirements
"""


@app.get("/")
async def root():
	return {"message": "Hello World"}


@app.get("/get-spell/{spell_id}")
async def get_spell(spell_id: int):
	# logic shoould be provided
	return {"requested spell id": spell_id}


"""
Registration and Log in 
"""


@app.post("/register/")
async def register():
	return responses.RedirectResponse("/?msg=sucsessfull", status_code=status.HTTP_201_CREATED)


"""
Test requests further
should not be commited to prod
"""


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
