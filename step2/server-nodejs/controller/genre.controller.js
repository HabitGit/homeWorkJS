const db = require('../db');

class genreController {
    async createGenre(req, res) {
        const {name, filmId} = req.body;
        const newGenre = await db.query('INSERT INTO genres (name, films_id_fk) VALUES ($1, $2) RETURNING *', [name, filmId])
        res.json(newGenre.rows[0])
    }
    async getGenres(req, res) {
        const genres = await db.query('SELECT * FROM genres')
        res.json(genres.rows)
    }
    async getGenreByFilm(req, res) {
        const id = req.query.id
        const genre = await db.query('SELECT * FROM genres WHERE films_id_fk = $1', [id])
        res.json(genre.rows)
    }
    async updateGenre(req, res) {
        const {id, name, filmId} = req.body;
        const genre = await db.query('UPDATE genres SET name = $1, films_id_fk = $2 WHERE genres_id = $3 RETURNING *', [name, filmId, id]);
        res.json(genre.rows[0])
    }
    async deleteGenre(req, res) {
        const id = req.params.id;
        const genre = await db.query('DELETE FROM genres WHERE genres_id = $1', [id]);
        res.json(genre.rows[0]);
    }
}

module.exports = new genreController();