CREATE TABLE films(
    films_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    year VARCHAR(4)
);

CREATE TABLE genres(
    genres_id SERIAL PRIMARY KEY,
    name VARCHAR(30),
    films_id_fk INT,

    FOREIGN KEY (films_id_fk) REFERENCES films(films_id)
);