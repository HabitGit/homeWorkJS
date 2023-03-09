const Application = require('./framework/application')
const jsonParser = require('./framework/parseJson')
const filmRouter = require('./routes/film.routes')
const genreRouter = require('./routes/genre.routes')
const parseUrl = require('./framework/parseUrl')

const PORT = process.env.PORT || 8080

const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:8080'));

app.addRouter(filmRouter);
app.addRouter(genreRouter);
app.listen(PORT, () => console.log(`Server started on ${PORT} port`))