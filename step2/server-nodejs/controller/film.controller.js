const db = require('../db')
class FilmController {
    async createFilm(req, res) {
        const {name, year} = req.body;
        const newFilm = await db.query('INSERT INTO films (name, year) values ($1, $2) RETURNING *',
            [name, year]);
        res.json(newFilm.rows[0]);
    }
    async getFilms(req, res) {
        const films = await db.query('SELECT * FROM films')
        res.json(films.rows)
    }
    async getOneFilm(req, res) {
        const id = req.params.id
        const film = await db.query('SELECT * FROM films WHERE films_id = $1', [id])
        res.json(film.rows[0])
    }
    async updateFilm(req, res) {
        const {id, name, year} = req.body;
        const user = await db.query('UPDATE films SET name = $1, year = $2 WHERE films_id = $3 RETURNING *',
            [name, year, id])
        res.json(user.rows[0])
    }
    async deleteFilm(req, res) {
        const id = req.params.id
        const film = await db.query('DELETE FROM films WHERE films_id = $1', [id])
        res.json(film.rows[0])
    }
}

module.exports = new FilmController();