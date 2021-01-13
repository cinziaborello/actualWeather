# ActualWeather API

The project consumes the [OpenWeather](https://openweathermap.org/api) third party API, and its API routes are:
* `/api/current/:city/:units` - to retrieve the current weather by city name and preferred unit
* `/api/airquality/:lat/:lon` - to retrieve the current air quality by a given city's coordinates
* `/api/forecast/:lat/:lon/:units` - to retrieve the weather forecast by a given city's coordinates
* `/api/favorites/` - to retrieve the list of favorite cities
* `/api/favorites/:cityName` - same path to both create and delete a favorite city`


Examples of API route, payload, and response:


![Alt ](/screenshots/getCurrentWeather.png?raw=true "Current Weather API payload")


![Alt ](/screenshots/getAirQuality.png?raw=true "Air Quality API payload")


![Alt ](/screenshots/getForecast.png?raw=true "Weather Forecast API payload")