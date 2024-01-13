
""""
CREATE DATABASE IF NOT EXISTS spells;
USE spells;

CREATE TABLE IF NOT EXISTS sources(
	id INT,
    book_name VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS spell_range(
	shape VARCHAR(100),
    distance_type VARCHAR(100),
    distance_range INT,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS duration(
	id INT,
    duration_type varchar(100),
    duretion_time INT,
    concentration INT,
    PRIMARY KEY (id)
);

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
