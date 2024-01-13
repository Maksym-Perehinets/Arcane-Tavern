from .extensions import db


"""
CREATE TABLE IF NOT EXISTS sources(
    id INT,
    book_name VARCHAR(100),
    PRIMARY KEY (id)
);
"""


class Sources(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    book_name = db.Column(db.String(100), nullable=False)
    spell_sourcчe = db.relationship('Spelчl', backref='source')


"""
CREATE TABLE IF NOT EXISTS spell_range(
    id INT,
    shape VARCHAR(100),
    distance_type VARCHAR(100),
    distance_range INT,
    PRIMARY KEY (id)
);
"""


class Ranges(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    shape = db.Column(db.String(150), nullable=False)
    distance_type = db.Column(db.String(255), nullable=False)
    distance_range = db.Column(db.Integer, nullable=False)
    spell_range = db.relationship('Spell', backref='spell_range')


"""
CREATE TABLE IF NOT EXISTS duration(
    id INT,
    duration_type varchar(100),
    duretion_time INT,
    concentration INT,
    PRIMARY KEY (id)
);
"""


class Duration(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    duration_type = db.Column(db.String(100), nullable=False)
    duretion_time = db.Column(db.Integer, nullable=False)
    concentration = db.Column(db.Integer, nullable=False)
    spell_dur = db.relationship('Spell', backref='duration')


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


class Spell(db.Model):
    __tablename__ = 'spell'
    id = db.Column(db.Integer, primary_key=True)
    spell_name = db.Column(db.String, unique=True, nullable=False)
    book_page = db.Column(db.Integer, nullable=False)
    spell_level = db.Column(db.Integer, nullable=False)
    school = db.Column(db.String(100), nullable=False)
    cast_time = db.Column(db.String(255), nullable=False)
    components = db.Column(db.String(255), nullable=False)
    spell_description = db.Column(db.String, nullable=False)
    ariatags = db.Column(db.String(10), nullable=False)
    source_id = db.Column(db.Integer, db.ForeignKey('sources.id'))
    spell_range_id = db.Column(db.Integer, db.ForeignKey('ranges.id'))
    duration_id = db.Column(db.Integer, db.ForeignKey('duration.id'))


