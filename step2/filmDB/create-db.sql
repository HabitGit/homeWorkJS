DROP TABLE IF EXISTS films CASCADE;
DROP TABLE IF EXISTS genres CASCADE;
DROP TABLE IF EXISTS persons CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS rating CASCADE;
DROP TABLE IF EXISTS stars CASCADE;
DROP TABLE IF EXISTS spectators CASCADE;
DROP TABLE IF EXISTS actors CASCADE;
DROP TABLE IF EXISTS films_genres CASCADE;
DROP TABLE IF EXISTS films_spectators CASCADE;
DROP TABLE IF EXISTS films_actors CASCADE;

CREATE TABLE films(
    films_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    year VARCHAR(4),
    country VARCHAR(80),
    tagline TEXT,
    fk_director_id INT,
    fk_screenwriter_id INT,
    fk_producer_id INT,
    fk_operator_id INT,
    fk_composer_id INT,
    fk_artist_id INT,
    fk_installation_id INT,
    budget INT,
    marketing INT,
    us_fees INT,
    world_fees INT,
    premiers_rf DATE,
    premiers_world DATE,
    premiers_dvd DATE,
    age VARCHAR(4),
    duration VARCHAR(5)
);

CREATE TABLE genres(
    genres_id SERIAL PRIMARY KEY,
    name VARCHAR(80),
    description TEXT
);

CREATE TABLE persons(
    persons_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    job_title VARCHAR(80),
    birthday DATE,
    country VARCHAR(80),
    fk_genres_id INT
);

CREATE TABLE reviews(
    reviews_id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    name VARCHAR(80),
    text TEXT,
    fk_film_id INT
);

CREATE TABLE rating(
    rating_id SERIAL PRIMARY KEY,
    ip VARCHAR(13),
    fk_film_id INT,
    fk_star_id INT
);

CREATE TABLE stars(
    stars_id SERIAL PRIMARY KEY,
    value INT
);

CREATE TABLE spectators(
    spectators_id SERIAL PRIMARY KEY,
    premiere VARCHAR(100),
    country VARCHAR(100),
    date DATE,
    count INT
);

CREATE TABLE actors(
    actors_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    birthday DATE,
    country VARCHAR(80)
);


ALTER TABLE films ADD CONSTRAINT fk_director FOREIGN KEY(fk_director_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_screenwriter FOREIGN KEY(fk_screenwriter_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_producer FOREIGN KEY(fk_producer_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_operator FOREIGN KEY(fk_operator_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_composer FOREIGN KEY(fk_composer_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_artist FOREIGN KEY(fk_artist_id) REFERENCES persons(persons_id);
ALTER TABLE films ADD CONSTRAINT fk_installation FOREIGN KEY(fk_installation_id) REFERENCES persons(persons_id);

ALTER TABLE persons ADD CONSTRAINT fk_genres FOREIGN KEY(fk_genres_id) REFERENCES genres(genres_id);

ALTER TABLE reviews ADD CONSTRAINT fk_film FOREIGN KEY(fk_film_id) REFERENCES films(films_id);

ALTER TABLE rating ADD CONSTRAINT fk_film FOREIGN KEY(fk_film_id) REFERENCES films(films_id);
ALTER TABLE rating ADD CONSTRAINT fk_star FOREIGN KEY(fk_star_id) REFERENCES stars(stars_id);


CREATE TABLE films_genres(
    films_id INT REFERENCES films(films_id),
    genres_id INT REFERENCES genres(genres_id),

    CONSTRAINT films_genres_pk PRIMARY KEY (films_id, genres_id)
);

CREATE TABLE films_spectators(
    films_id INT REFERENCES films(films_id),
    spectators INT REFERENCES spectators(spectators_id),

    CONSTRAINT films_spectators_pk PRIMARY KEY (films_id, spectators)
);

CREATE TABLE films_actors(
    films_id INT REFERENCES films(films_id),
    actors_id INT REFERENCES actors(actors_id),

    CONSTRAINT films_actors_pk PRIMARY KEY (films_id, actors_id)
);


INSERT INTO genres VALUES
                       (1, 'fantasy', 'something about fantasy'),
                       (2, 'horror', 'something about horror'),
                       (3, 'drama', 'something about dramma'),
                       (4, 'crime', 'something about crime'),
                       (5, 'detective', 'something about detective'),
                       (6, 'action movie', 'something about action'),
                       (7, 'comedy', 'something about comedy'),
                       (8, 'melodrama', 'something about melodrama'),
                       (9, 'thriller', 'something about thriller'),
                       (10, 'documentary', 'something about documentary')
;

INSERT INTO actors VALUES
                        (1, 'Tom Hanks', '1956-07-09', 'USA'),
                        (2, 'David Mors', '1953-10-11', 'USA'),
                        (3, 'Bonny Hunt', '1961-09-22', 'USA'),
                        (4, 'Mikle Klark', '1957-12-10', 'USA'),
                        (5, 'Djaims Kromuell', '1940-01-27', 'USA'),
                        (6, 'Mikle Jiter', '1952-08-26', 'USA'),
                        (7, 'Grem Green', '1952-06-22', 'Kanada'),
                        (8, 'Dag Hatchinson', '1960-05-26', 'USA'),
                        (9, 'Sam Rokuell', '1968-11-05', 'USA'),
                        (10, 'Barrie Pepper', '1970-04-04', 'Kanada')
;

INSERT INTO spectators VALUES
                           (1, 'The Green Mile', 'USA', '1999-12-10', 26000000),
                           (2, 'The Green Mile', 'Germany', '2000-02-10', 2107877),
                           (3, 'The Green Mile', 'Grece', '2000-02-11', 182000),
                           (4, 'The Green Mile', 'Nordth', '2000-02-11', 110510),
                           (5, 'The Green Mile', 'Finland', '2000-02-11', 32953),
                           (6, 'The Green Mile', 'Swidish', '2000-02-11', 132085),
                           (7, 'The Green Mile', 'Spain', '2000-02-18', 692551),
                           (8, 'The Green Mile', 'Dain', '2000-02-25', 129224),
                           (9, 'The Green Mile', 'France', '2000-03-01', 1714080),
                           (10, 'The Green Mile', 'Island', '2000-03-03', 15281)
;

INSERT INTO persons VALUES
                       (1, 'Frank Darabont', 'director', '1959-01-28', 'France', 3),
                       (2, 'Frank Darabont', 'screenwriter', '1959-01-28', 'France', 3),
                       (3, 'Frank Darabont', 'producer', '1959-01-28', 'France', 3),
                       (4, 'Stiven King', 'screenwriter', '1947-09-21', 'USA', 2),
                       (5, 'Devid Valdes', 'producer', '1950-08-12', 'USA', 6),
                       (6, 'Devid Tettersoll', 'operator', '1960-11-14', 'England', 6),
                       (7, 'Tomas Howman', 'composer', '1955-10-20', 'USA', 7),
                       (8, 'Terens Marsh', 'artist', '1931-11-14', 'England', 9),
                       (9, 'Richard Frencis', 'installation', '1948-12-10', 'Australia', 9)
;

INSERT INTO films VALUES
                      (1, 'The Green Mile', '1999', 'USA', 'Пол Эджкомб не верил в чудеса. Пока не столкнулся с одним из них',
                       1, 4, 5, 6, 7, 8, 9, 60000000, 30000000, 136801374, 286801374, '2000-04-18', '1999-12-06',
                       '2001-02-13', '16+', '03:09');

INSERT INTO reviews VALUES
                        (1, 'name@gmail.com', 'Ivan Ivanof', 'Very good film', 1),
                        (2, 'name2@gmail.com', 'Bob Fedorof', 'Not good', 1)
;

INSERT INTO stars VALUES
                      (1, 1),
                      (2, 2),
                      (3, 3),
                      (4, 4),
                      (5, 5)
;

INSERT INTO rating VALUES
                       (1, '168.111.1.13', 1, 5)
;

INSERT INTO films_genres VALUES
                             (1, 1),
                             (1, 3),
                             (1, 4)
;

INSERT INTO films_spectators VALUES
                                 (1, 1),
                                 (1, 2),
                                 (1, 3),
                                 (1, 4),
                                 (1, 5),
                                 (1, 6),
                                 (1, 7),
                                 (1, 8),
                                 (1, 9),
                                 (1, 10)
;

INSERT INTO films_actors VALUES
                             (1, 1),
                             (1, 2),
                             (1, 3),
                             (1, 4),
                             (1, 5),
                             (1, 6),
                             (1, 7),
                             (1, 8),
                             (1, 9),
                             (1, 10)
;