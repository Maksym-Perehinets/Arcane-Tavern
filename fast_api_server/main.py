from fastapi import FastAPI, Depends, HTTPException, responses, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import func, asc, desc
from sqlalchemy.orm import Session
from fast_api_server.service import Service
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
                "id": spell.id,
                "name": spell.spell_name,
                "level": spell.spell_level,
                "components": spell.components,
                # Duration type, time, concentration
                "duration": {
                    "type": duration.duration_type,
                    "time": duration.duration_time,
                    "concentration": duration.concentration
                },
                "time": spell.cast_time,
                # Range with
                "ranges": {
                    "type": ranges.shape,
                    "distance": {
                        "type": ranges.distance_type,
                        "amount": ranges.distance_range
                    }
                }
            }
            for spell, duration, ranges in result
        ]

        return {
            "status": "spell",
            "data": formatted_result
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
    service_instance = Service()

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
        formatted_result = service_instance.format_spell(result)
        return {
            "status": "pussy test",
            "data": formatted_result
        }


@app.get("/data-sort/")
async def data_filter(filter_name: str, asc_value: bool = True, db: Session = Depends(get_db)):
    """
    Endpoint to filter and retrieve data based on different criteria.

    Args:
        filter_name (str): The filter criteria (e.g., "lvl", "name", "concentration", "duration", "time", "range").
        asc_value (bool, optional): Ascending order if True, descending order if False. Default is True.
        db (Session): SQLAlchemy database session.

    Returns:
        dict: A dictionary containing the status and filtered data.

    Raises:
        HTTPException: Raised if there is an issue with the database or if the data is corrupted.

    Notes:
        The endpoint supports filtering data based on different criteria such as spell level, spell name,
        concentration, duration, casting time, and spell range.

        - For `filter_name` = "lvl", the data is filtered and ordered by spell level.
        - For `filter_name` = "name", the data is filtered and ordered by spell name.
        - For `filter_name` = "concentration", the data is filtered based on concentration (1 for True, 0 for False).
        - For `filter_name` = "duration", the data is filtered and ordered by spell duration.
        - For `filter_name` = "time", the data is filtered and ordered by casting time.
        - For `filter_name` = "range", the data is filtered and ordered by spell range.

        The result is returned as a dictionary with a status and a list of dictionaries containing the formatted data.

    Example:
        To retrieve spells ordered by level in descending order:
        ```
        /data_filter/?filter_name=lvl&asc_value=False
        ```

        To retrieve spells with concentration in ascending order:
        ```
        /data_filter/?filter_name=concentration&asc_value=True
        ```
    """
    service_instance = Service()
    result = None
    if filter_name == "lvl":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .order_by(asc(Spell.spell_level) if asc_value == True else desc(Spell.spell_level))
        ).all()

    elif filter_name == "name":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .order_by(asc(Spell.spell_name) if asc_value == True else desc(Spell.spell_name))
        ).all()

    elif filter_name == "concentration":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .filter(Durations.concentration == 1 if asc_value == True else Durations.concentration == 0)
        ).all()

    elif filter_name == "duration":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .order_by(asc(Durations.duration_time) if asc_value == True else desc(Durations.duration_time))
            .order_by(desc(Durations.duration_type))
        ).all()

    elif filter_name == "time":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .order_by(asc(Spell.cast_time) if asc_value == True else desc(Spell.cast_time))
        ).all()

    elif filter_name == "range":
        result = (
            db.query(Spell, Sources.book_name, Durations, Ranges)
            .join(Sources, Sources.id == Spell.source_id)
            .join(Durations, Durations.id == Spell.duration_id)
            .join(Ranges, Ranges.id == Spell.spell_range_id)
            .order_by(asc(Ranges.distance_range) if asc_value == True else desc(Ranges.distance_range))
            .order_by(desc(Durations.duration_type))
        ).all()

    if None in result:
        # if data is corrupted
        raise HTTPException(status_code=404, detail="Something went wrong with database pleas contact owner")
    else:
        # if data is correct then return list of dicts
        formatted_result = service_instance.format_spell(result)
        return {
            "status": "pussy test",
            "data": formatted_result
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


# except Exception as e:
#     raise HTTPException(status_code=500, detail=str(e))


@app.post("/findSpellByName/")
async def findSpellByName(item: schemas.Item):
    try:
        processed_data = f"{item.name}"
        return processed_data
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
