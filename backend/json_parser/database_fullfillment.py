from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from database.models import Base, Sources, Ranges, Durations, Spell
from database import models
from json_parser.parser import JsonParser

"""
Do not touch this file directly!
Never start it if you already have the database!
Pray before starting the script!
Allowed to start only in first startup of server 
!!!THEN NEVER AGAIN UNLESS YOUR DATABASE WAS CORRUPTED!!!
"""

# Path to database
SQLALCHEMY_DATABASE_URL = "sqlite:///spells_db.db"

# Engine creation for future connection
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}
)

# Bind the engine to the Base
models.Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
session = SessionLocal()
# Latest satable version of this shit code pray to your gods to never do the same


def fill_database():
    try:
        get_data = JsonParser('spells_json/index.json')

        # Inserting data to sources ranges and durations tables
        for source, ranges, duration in zip(get_data.get_all_sources(), get_data.get_all_ranges(),
                                            get_data.get_all_durations()):
            new_source = Sources(**source)
            new_range = Ranges(**ranges)
            new_duration = Durations(**duration)
            session.add(new_source)
            session.add(new_range)
            session.add(new_duration)
        session.commit()

        # Inserting data to spell table
        for spell in get_data.get_all_spells():
            new_spell = Spell(**spell)
            session.add(new_spell)
        session.commit()
    finally:
        session.close()


if __name__ == "__main__":
    fill_database()
