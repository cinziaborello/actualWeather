const axios = require('axios');
const ENV = require('../.env.ts');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getCurrentWeather = (req, res) => {
  const city = req.params.city;
  const units = req.params.units;
  axios.get(`${BASE_URL}weather?q=${city}&units=${units}&appid=${ENV.API_KEY}`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(err => {
    res.status(500).send('Error in retrieving current weather');
  });
};

const getForecast = (req, res) => {
  const lat = req.params.lat;
  const lon = req.params.lon;
  const units = req.params.units;
  axios.get(`${BASE_URL}onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,hourly&appid=${ENV.API_KEY}`)
    .then(response => {
      res.status(200).send(response.data);
    })
    .catch(err => {
      res.status(500).send('Error in retrieving weather forecast');
    });
};

module.exports = {
  getCurrentWeather,
  getForecast
};