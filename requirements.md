# ActualWeather

ActualWeather is a full-stack web app to search for current weather and air quality conditions by city, discover its following 5 day forecast, and easily switch between Fahrenheit and Celsius.


## Project Description
- A high level architectural overview of your web application. e.g. names, relationships and purposes of all components and relevant data models
- Brief description of the architectural design pattern that you leveraged (MVC, MVP, MVVM)
- Screenshots of each View and descriptions of the overall user flow as well as any place that you made distinct design decisions.  (Screenshots can be taken via any screenshot capture application or native methods).


## Project Requirements
Please list examples of how your project meets the following requirements below:
- [x] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.

The project is build in Typescript using React.


- [x] Create an application that can be interacted with in a minimum of three different ways by the user.

The application allows to
* search the current weather and air quality by city name - specifying state and/or country, such as `San Francisco, CA, US`
* switch between Fahrenheit and Celsius
* click on a button to see 5 day weather forecast
* add a location to a list of favorite cities
* remove a city from the list of favorites
* click on a favorite city to retrieve the weather and air quality for that location
* expand the list of favorite cities when is longer than seven


- [x] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)

The project is built following the MVC architectural pattern.
* Client-side: the React components are separated by their role in Controller Components and View Components.
  * Controller components know how to access and update state and execute domain logic. Such as protocols to interact with the backend.
  * View components contain UI code, unaware of how state is updated and data retrieved.

* Server-side: the Express server handles the request coming from the front-end towards the API routes and queries to the [OpenWeather](https://openweathermap.org/api) API are handled by their respective controller.


- [x] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).

The project consumes the [OpenWeather](https://openweathermap.org/api) third party API, and the project's API routes are:
* /api/current/:city/:units - to retrieve the current weather by city name and preferred unit
* /api/airquality/:lat/:lon - to retrieve the current air quality by a given city's coordinates
* /api/forecast/:lat/:lon/:units - to retrieve the weather forecast by a given city's coordinates
* /api/favorites/ - to retrieve the list of favorite cities
* /api/favorites/:cityName - same path to both create and delete a favorite city


- [x] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)

The library was use extensively in the project, some of the components used are:
* Grid - to design the page layout in AppGrid controller component
* GridList & GridListTile - to position each day forecast in ForecastWeather view component
* AppBar & Toolbar - to create the header in TopBar view component
* InputBase - to create the search input text box in SearchInput view component
* Switch - to toggle between degree units in UnitsSwitch view component


- [x] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.

While there are multiple ways to create custom and reusable UI components, CustomCard and ErrorCard are based on the material-ui Card component with added CSS. They can be found in:
* FavoriteList controller component
* CurrentAirQuality view component
* CurrentWeather view component
* ForecastWeather view component
* WelcomeCard view component

