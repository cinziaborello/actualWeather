import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { getCurrentWeather, getForecast } from './controllers/weather';
import { getFavorites, addFavorite, removeFavorite } from './controllers/favorites';

const app = express();
const port = 8080;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

// invoke the controller to retrieve the current weather data
app.get('/api/current/:city/:units', (req, res) => {
  getCurrentWeather(req.params.city, req.params.units)
    .then(results => {
      res.status(200).send(results);
    })
    .catch(() => {
      res.status(500).send('Error in retrieving current weather');
    });
});

// invoke the controller to retrieve the weather forecast data
app.get('/api/forecast/:lat/:lon/:units', (req, res) => {
  getForecast(req.params.lat, req.params.lon, req.params.units)
    .then(results => {
      res.status(200).send(results);
    })
    .catch(() => {
      res.status(500).send('Error in retrieving weather forecast');
    });
});

// invoke the controller to retrieve list of favorite cities
app.get('/api/favorites/', (req, res) => {
  getFavorites()
    .then(favorites => {
      res.status(200).send(favorites);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// invoke the controller to add a new city to favorites
app.post('/api/favorites/:cityName', (req, res) => {
  addFavorite(req.params.cityName)
    .then(success => {
      res.status(200).send(success);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});

// invoke the controller to remove a city from favorites
app.delete('/api/favorites/:cityName', (req, res) => {
  removeFavorite(req.params.cityName)
    .then(success => {
      res.status(200).send(success);
    })
    .catch(err => {
      res.status(500).send(err);
    });
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
module.exports = app;
