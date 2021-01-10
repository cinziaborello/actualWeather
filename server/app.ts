const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const weatherAPI = require('./controllers/weather');

const app = express();
const port = 8080;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'html');

// invoke the controller to retrieve the current weather data from the external service
app.get('/api/current/:city', (req, res) => {
  weatherAPI.getCurrentWeather(req, res);
});

// invoke the controller to retrieve the weather forecast data from the external service
app.get('/api/forecast/:coordinates', (req, res) => {
  weatherAPI.getForecast(req, res);
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
