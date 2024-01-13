from sqlalchemy import Column, Integer, String
from sqlalchemy.sql.expression import null
from .database import Base


"""
CREATE TABLE IF NOT EXISTS sources(
    id INT,
    book_name VARCHAR(100),
    PRIMARY KEY (id)
);
"""


class Sources(Base.Model):
    id = Base.Column(Base.Integer, primary_key=True)
    book_name = Base.Column(Base.String(100), nullable=False)
    spell_source = Base.relationship('Spell', backref='source')


"""
CREATE TABLE IF NOT EXISTS spell_range(
    id INT,
    shape VARCHAR(100),
    distance_type VARCHAR(100),
    distance_range INT,
    PRIMARY KEY (id)
);
"""


class Ranges(Base.Model):
    id = Base.Column(Base.Integer, primary_key=True)
    shape = Base.Column(Base.String(150), nullable=False)
    distance_type = Base.Column(Base.String(255), nullable=False)
    distance_range = Base.Column(Base.Integer, nullable=False)
    spell_range = Base.relationship('Spell', backref='spell_range')


"""
CREATE TABLE IF NOT EXISTS duration(
    id INT,
    duration_type varchar(100),
    duretion_time INT,
    concentration INT,
    PRIMARY KEY (id)
);
"""


class Duration(Base.Model):
    id = Base.Column(Base.Integer, primary_key=True)
    duration_type = Base.Column(Base.String(100), nullable=False)
    duretion_time = Base.Column(Base.Integer, nullable=False)
    concentration = Base.Column(Base.Integer, nullable=False)
    spell_dur = Base.relationship('Spell', backref='duration')


"""

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


class Spell(Base.Model):
    __tablename__ = 'spell'
    id = Base.Column(Base.Integer, primary_key=True)
    spell_name = Base.Column(Base.String, unique=True, nullable=False)
    book_page = Base.Column(Base.Integer, nullable=False)
    spell_level = Base.Column(Base.Integer, nullable=False)
    school = Base.Column(Base.String(100), nullable=False)
    cast_time = Base.Column(Base.String(255), nullable=False)
    components = Base.Column(Base.String(255), nullable=False)
    spell_description = Base.Column(Base.String, nullable=False)
    ariatags = Base.Column(Base.String(10), nullable=False)
    source_id = Base.Column(Base.Integer, Base.ForeignKey('sources.id'))
    spell_range_id = Base.Column(Base.Integer, Base.ForeignKey('ranges.id'))
    duration_id = Base.Column(Base.Integer, Base.ForeignKey('duration.id'))
