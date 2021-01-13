# ActualWeather

ActualWeather is a full-stack web app to search for current weather and air quality conditions by city, discover the following days forecast, and easily switch between Fahrenheit and Celsius.


## Project Description

### High-level Components Overview

`AppGrid` is the component in charge of the page layout as well as fetching the data to display when the page first renders. It's at the top of the components hierarchy and the other components are organized as following:
* `TopBar`: renders at the top of page and includes the app title, the search box, current date, and the units toggle.
  * `SearchInput`: contains the search box
  * `Today`: shows today's date
  * `UnitsSwitch`: is the toggle to change units
*  `CurrentWeather`: this component renders on the left of the screen, depending on the data fetching state. If no search has been performed the `WelcomeCard` component is shown instead. It presents a button to see the forecast and one to add the current city as favorite.
  * `WeatherInfo`: organizes the weather information
* `CurrentAirQuality`: appears in the middle, between current weather and the list of favorites, once the current weather data has been fetched.
* `FavoritesList`: is a controller component in charge of handling the create and delete operations for the list of favorites. Renders on the right side of the screen, shows the cities that have been added to favorites. Once there are more than seven cities saved, a button to expand or contract the list appears.
  * `FavoritesListEntries`: splits each city into its own component
    * `FavoriteCity`: displays the name of the city and an icon button to delete it
* `ForecastWeather`: renders once a user clicks on the see forecast button within the CurrentWeather component.
  * `ForecastDate` is a wrapper for `WeatherInfo` which organizes the forecast information


### Architecture Pattern

The project is built following the MVC (Model View Controller) architecture pattern.
* Client-side: the React components are separated by their role in Controller Components and View Components.
  * Controller components know how to access and update state and execute domain logic. Such as protocols to interact with the back-end.
  * View components contain UI code, unaware of how state is updated and data retrieved.

* Server-side: the Express server handles the requests coming from the front-end towards the API routes and queries to the [OpenWeather](https://openweathermap.org/api) API are handled by their respective controller.


### User Flow and Views

[Screenshots of each View and descriptions of the overall user flow.](appViews.md)


## Project Requirements

- [x] Use a modern JS Library/Framework like React, Angular, etc. We suggest using React.js.

The project is built in Typescript using React.


- [x] Create an application that can be interacted with in a minimum of three different ways by the user.

The application allows to:
* search the current weather and air quality by city name, specifying state and/or country, such as `San Francisco, CA, US`
* switch between Fahrenheit and Celsius
* click on a button to see weather forecast
* add a location to a list of favorite cities
* remove a city from the list of favorites
* click on a favorite city to retrieve the weather and air quality for that location
* expand the list of favorite cities when is longer than seven


- [x] The usage of a specified architectural pattern (MVC, MVP, MVVM,  etc.)

The project is built following the MVC (Model View Controller) architecture pattern.
* Client-side: the React components are separated by their role in Controller Components and View Components.
  * Controller components know how to access and update state and execute domain logic. Such as protocols to interact with the back-end.
  * View components contain UI code, unaware of how state is updated and data retrieved.

* Server-side: the Express server handles the requests coming from the front-end towards the API routes and queries to the [OpenWeather](https://openweathermap.org/api) API are handled by their respective controller.


- [x] Use of a [REST API](https://medium.com/@arteko/the-best-way-to-use-rest-apis-in-swift-95e10696c980).

The project consumes the [OpenWeather](https://openweathermap.org/api) third party REST API.
The app's API routes are:
* `/api/current/:city/:units` - to retrieve the current weather by city name and preferred unit
* `/api/airquality/:lat/:lon` - to retrieve the current air quality by a given city's coordinates
* `/api/forecast/:lat/:lon/:units` - to retrieve the weather forecast by a given city's coordinates
* `/api/favorites/` - to retrieve the list of favorite cities
* `/api/favorites/:cityName` - same path to both create and delete a favorite city

[Examples of API route, payload, and response.](api.md)


- [x] Usage of at least 5 UI components from the [material-ui/@core](https://material-ui.com/) library (if you are not using React, a comparable UI library is acceptable)

The library was use extensively in the project, some of the components used are:
* `Grid` - to design the page layout in AppGrid controller component
* `GridList` & `GridListTile` - to position each day forecast in ForecastWeather view component
* `AppBar` & `Toolbar` - to create the header in TopBar view component
* `InputBase` - to create the search input text box in SearchInput view component
* `Switch` - to toggle between degree units in UnitsSwitch view component


- [x] An example of a reusable UI component that you have created and used in the app. This should be different than the 5 UI components from the vendor library.

While there are multiple ways to create custom and reusable UI components, `CustomCard` and `ErrorCard` are based on the material-ui Card component with additional CSS. They can be found in:
* FavoriteList controller component
* CurrentAirQuality view component
* CurrentWeather view component
* ForecastWeather view component
* WelcomeCard view component


### Notes

The favorites list feature implementation is simplified, a hack to showcase its nature for this prototype. If such a feature were to be included in a production application, it would require authentication and a database to store the information to achieve persistence across sessions.