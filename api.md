# ActualWeather API

The project consumes the [OpenWeather](https://openweathermap.org/api) third party REST API, and the app's API routes are:
* `/api/current/:city/:units` - to retrieve the current weather by city name and preferred unit
* `/api/airquality/:lat/:lon` - to retrieve the current air quality by a given city's coordinates
* `/api/forecast/:lat/:lon/:units` - to retrieve the weather forecast by a given city's coordinates
* `/api/favorites/` - to retrieve the list of favorite cities
* `/api/favorites/:cityName` - same path to both create and delete a favorite city


Examples of API route, payload, and response:

### GET current weather
![Alt ](/screenshots/getCurrentWeather.png?raw=true "Current Weather API payload")


### GET air quality
![Alt ](/screenshots/getAirQuality.png?raw=true "Air Quality API payload")


### GET forecast
![Alt ](/screenshots/getForecast.png?raw=true "Weather Forecast API payload")


To interact with the OpenWeather API, a personal free API key is needed. Rename the file `.env_copy.ts` to `.env.ts` and paste your API key there.