const axios = require('axios');
const ENV = require('../.env.ts');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getCurrentWeather = (req, res) => {
  const city = req.params.keyword;
  axios.get(`${BASE_URL}weather?q=${city}&units=imperial&appid=${ENV.API_KEY}`)
  .then(response => {
    res.status(200).send(response.data);
  })
  .catch(err => {
    res.status(500).send('Error in retrieving current weather');
  });
};

const getForecast = (req, res) => {
  const coordinates = req.params.coordinates;
  axios.get(`${BASE_URL}onecall?${coordinates}&units=imperial&exclude=current,minutely,hourly&appid=${ENV.API_KEY}`)
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