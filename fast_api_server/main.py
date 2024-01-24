from fastapi import FastAPI, Depends, HTTPException, responses, status
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
def test():
	return {
	"spell": [
		{
			"id" : 1,
			"name": "Air Bubble",
			"source": "AAG",
			"page": 22,
			"level": 2,
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
				"s": "true"
			},
			"duration": [
				{
					"type": "timed",
					"duration": {
						"type": "hour",
						"amount": 24
					}
				}
			],
			"entries": [
				"You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system)."
			],
			"entriesHigherLevel": [
				{
					"type": "entries",
					"name": "At Higher Levels",
					"entries": [
						"When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd."
					]
				}
			],
			"miscTags": [
				"SGT"
			],
			"hasFluffImages": "true"
		},
		{
			"id" : 2,
			"name": "Create Spelljamming Helm",
			"source": "AAG",
			"page": 22,
			"level": 5,
			"school": "T",
			"time": [
				{
					"number": 1,
					"unit": "action"
				}
			],
			"range": {
				"type": "point",
				"distance": {
					"type": "touch"
				}
			},
			"components": {
				"v": "true",
				"s": "true",
				"m": {
					"text": "a crystal rod worth at least 5,000 gp, which the spell consumes",
					"cost": 500000,
					"consume": "true"
				}
			},
			"duration": [
				{
					"type": "instant"
				}
			],
			"entries": [
				"Holding the rod used in the casting of the spell, you touch a Large or smaller chair that is unoccupied. The rod disappears, and the chair is transformed into a {@item spelljamming helm|AAG}."
			]
		}
	]

	}	



@app.get("/returnSpellsToTable/")
def returnSpellsToTable():
	return {
	"spell": [
		{
			"name": "Air Bubble",
			"source": "AAG",
			"page": 22,
			"level": 2,
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
			"components": "s",
			"duration": [
				{
					"type": "timed",
					"duration": {
						"type": "hour",
						"amount": 24
					}
				}
			],
			"entries": [
				"You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system)."
			],
			"entriesHigherLevel": [
				{
					"type": "entries",
					"name": "At Higher Levels",
					"entries": [
						"When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd."
					]
				}
			],
			"miscTags": [
				"SGT"
			],
			"hasFluffImages": "true"
		}
	]

	}	
    # except Exception as e:
    #     raise HTTPException(status_code=500, detail=str(e))




@app.post("/findSpellByName/")
async def findSpellByName(item: schemas.Item):
    try:
        processed_data = f"{item.name}"
        return processed_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))