from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, JSON
from sqlalchemy.orm import relationship
from .database import Base

"""
Sources table

CREATE TABLE IF NOT EXISTS sources(
    id INT,
    book_name VARCHAR(100),
    PRIMARY KEY (id)
);
"""


class Sources(Base):
    __tablename__ = 'sources'
    id = Column(Integer, primary_key=True)
    book_name = Column(String(100), nullable=False)
    # Declaration of relation with spell table as foreign key
    spells = relationship('Spell', back_populates='source')



"""
Spell ranges table 

CREATE TABLE IF NOT EXISTS spell_range(
    id INT,
    shape VARCHAR(100),
    distance_type VARCHAR(100),
    distance_range INT,
    PRIMARY KEY (id)
);
"""


class Ranges(Base):
    __tablename__ = 'ranges'
    id = Column(Integer, primary_key=True)
    shape = Column(String(150), nullable=True)
    distance_type = Column(String(255), nullable=True)
    distance_range = Column(Integer, nullable=True)
    # Declaration of relation with spell table as foreign key
    spells = relationship('Spell', back_populates='spell_range')


"""
Duration table

CREATE TABLE IF NOT EXISTS duration(
    id INT,
    duration_type varchar(100),
    duretion_time INT,
    concentration INT,
    PRIMARY KEY (id)
);
"""


class Durations(Base):
    __tablename__ = 'durations'
    id = Column(Integer, primary_key=True)
    duration_type = Column(String(100), nullable=True)
    duration_time = Column(Integer, nullable=True)
    concentration = Column(Boolean, nullable=True)
    # Declaration of relation with spell table as foreign key
    spells = relationship('Spell', back_populates='duration')


"""
Spell table 

CREATE TABLE IF NOT EXISTS spell(
    id INT,
    spell_name VARCHAR(255),
    book_source_id VARCHAR(255),
    book_page INT,
    spell_level INT,
    school VARCHAR(100),
    cast_time VARCHAR(50),
    spell_range_id INT,
    components VARCHAR(255),
    spell_duration_id INT,
    spell_description TEXT,
    ariatags VARCHAR(10),
    FOREIGN KEY (book_source_id) REFERENCES sources(id),
    FOREIGN KEY (cast_time_id) REFERENCES cast_time(id),
    FOREIGN KEY (spell_range_id) REFERENCES spell_range(id),
    FOREIGN KEY (spell_duration_id) REFERENCES duration(id)
);
"""


class Spell(Base):
    __tablename__ = 'spells'
    id = Column(Integer, primary_key=True)
    spell_name = Column(String, unique=False, nullable=False)
    book_page = Column(Integer, nullable=False)
    spell_level = Column(Integer, nullable=False)
    school = Column(String(100), nullable=False)
    cast_time = Column(JSON, nullable=False)
    components = Column(JSON, nullable=False)
    spell_description = Column(JSON, nullable=False)
    suitable_casters = Column(JSON, nullable=False)
    entries_higher_level = Column(JSON, nullable=False)
    source_id = Column(Integer, ForeignKey('sources.id'))  # Foreign key reference sources table
    spell_range_id = Column(Integer, ForeignKey('ranges.id'))  # Foreign key reference to ranges able
    duration_id = Column(Integer, ForeignKey('durations.id'))  # Foreign key reference to durations table
    # Declaration of relation with other tabels as foreign key
    source = relationship('Sources', back_populates='spells')
    spell_range = relationship('Ranges', back_populates='spells')
    duration = relationship('Durations', back_populates='spells')


