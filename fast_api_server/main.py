from fastapi import FastAPI, Depends, HTTPException, responses, status
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

from database.database import engine, get_db
from database.models import Sources, Durations, Ranges, Spell
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


@app.get("/spells")
async def dbtest(db: Session = Depends(get_db)):
    """
    Get short information of each spell in the database.

    **DO NOT INSERT ANYTHING.**

    If the response is like this "Something went wrong with the database, please contact the owner,"
    then something went wrong with your local database delete file and read documentation for database_fulfillment.

    Returns:
    - `status`: A string indicating the status of the request.
    - `data`: A list of dictionaries containing short information about each spell.

    Raises:
    - `HTTPException`: If there is an issue with the database.

    Example Usage:
    ```python
    response = client.get("/spells")
    assert response.status_code == 200
    assert response.json()["status"] == "spell"
    assert len(response.json()["data"]) > 0
    ```

    """
    result = (
        db.query(Spell, Durations, Ranges)
        .join(Durations, Durations.id == Spell.duration_id)
        .join(Ranges, Ranges.id == Spell.spell_range_id)
        .all()
    )

    # Data consistency check
    if None in result:
        # if data is corrupted
        raise HTTPException(status_code=404, detail="Something went wrong with database pleas contact owner")
    else:
        # if data is correct then return list of dicts
        formatted_result = [
            {
                "id":           spell.id,
                "name":         spell.spell_name,
                "level":        spell.spell_level,
                "components":   spell.components,
                # Duration type, time, concentration
                "duration": {
                    "type":          duration.duration_type,
                    "time":          duration.duration_time,
                    "concentration": duration.concentration
                },
                "time":         spell.cast_time,
                # Range with
                "ranges": {
                    "type":     ranges.shape,
                    "distance": {
                        "type":     ranges.distance_type,
                        "amount":   ranges.distance_range
                    }
                }
            }
            for spell, duration, ranges in result
        ]

        return {
            "status": "spell",
            "data":   formatted_result
        }


@app.get("/get-spell/{spell_id}")
async def get_spell(spell_id: int, db: Session = Depends(get_db)):
    """
    Retrieve information about a spell by its ID.

    Parameters:
    - `spell_id`: The unique identifier for the spell.

    Returns:
    - `status`: A string indicating the status of the request.
    - `data`: A list of dictionaries containing information about the spell.

    Raises:
    - `HTTPException`: If there is an issue with the database or the requested spell is not found.

    Example Usage:
    ```JavaScript
    // Fetch spell information by ID
    async function getSpellById(spellId) {
    const response = await fetch(`http://localhost:8000/get-spell/${spellId}`);
    const data = await response.json();

    if (response.status !== 200) {
        console.error(`Error: ${data.detail}`);
        // Handle error appropriately
        return null;
    }

    console.log("Spell Data:", data.data);
    return data.data;
    }

    // Example Usage
    const spellId = 1; // Replace with the desired spell ID
    getSpellById(spellId);
    ```
    """
    result = (
        db.query(Spell, Sources.book_name, Durations, Ranges)
        .join(Sources, Sources.id == Spell.source_id)
        .join(Durations, Durations.id == Spell.duration_id)
        .join(Ranges, Ranges.id == Spell.spell_range_id)
        .filter(Spell.id == spell_id)
        .all()
    )

    # Data consistency check
    if None in result:
        # if data is corrupted
        raise HTTPException(status_code=404, detail="Something went wrong with database pleas contact owner")
    else:
        # if data is correct then return list of dicts
        formatted_result = [
            {
                "id":           spell.id,
                "name":         spell.spell_name,
                "source":       source,
                "page":         spell.book_page,
                "level":        spell.spell_level,
                "school":       spell.school,
                "components":   spell.components,
                # Duration type, time, concentration
                "duration": {
                    "type":          duration.duration_type,
                    "time":          duration.duration_time,
                    "concentration": duration.concentration
                },
                "time":         spell.cast_time,
                # Range with
                "ranges": {
                    "type":     ranges.shape,
                    "distance": {
                        "type":     ranges.distance_type,
                        "amount":   ranges.distance_range
                    }
                },
                "casters":                   spell.suitable_casters,
                "description":               spell.spell_description,
                "descriptionOnHigherLevels": spell.entries_higher_level
            }
            for spell, source, duration, ranges in result
        ]

        return {
            "status": "pussy test",
            "data":   formatted_result
        }


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

@app.get("/test")
def test():
    return {
        "spell": [
            {
                "id": 1,
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
                "id": 2,
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
