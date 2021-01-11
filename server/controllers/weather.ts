import axios from 'axios';
import { API_KEY } from '../.env';

const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

export const getCurrentWeather = (city: string, units: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}weather?q=${city}&units=${units}&appid=${API_KEY}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
};

export const getForecast = (lat: string, lon: string, units: string): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
};