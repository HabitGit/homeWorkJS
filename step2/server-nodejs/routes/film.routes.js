const Router = require('../framework/router');
const router = new Router();
const filmController = require('../controller/film.controller');

router.post('/film', filmController.createFilm)
router.get('/film', filmController.getFilms)
router.get('/film/:id', filmController.getOneFilm)
router.put('/film', filmController.updateFilm)
router.delete('/film/:id', filmController.deleteFilm)




module.exports = router