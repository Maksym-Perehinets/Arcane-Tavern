from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Path to database
SQLALCHEMY_DATABASE_URL = "sqlite:///./spells_db.db"

# Engine creation for future connection
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    # Function for connection establishment after request
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
