const Router = require('../framework/router');
const router = new Router();
const genreController = require('../controller/genre.controller');

router.post('/genre', genreController.createGenre)
router.get('/genre', genreController.getGenres)
router.put('/genre', genreController.updateGenre)
router.delete('/genre/:id', genreController.deleteGenre)


module.exports = router