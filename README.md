# ActualWeather

ActualWeather is a full-stack web app to search for current weather and air quality conditions by city, discover the following days forecast, and easily switch between Fahrenheit and Celsius.


## Overview

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


## Instructions to start the app

To start the client:
```
cd client
npm install
npm start
```

The client runs on http://localhost:3000. This directory was bootstrapped using `create-react-app`.


To start the server:
```
cd server
npm install
npm start
```

The Express NodeJS server runs on http://localhost:8080.

To interact with the OpenWeather API, a personal free API key is needed. Rename the file `.env_copy.ts` to `.env.ts` and paste your API key there.


## Project Structure

Being a single page app, the project is organized with a client and server folders inside the main repo. This structure achieves clear separation of concerns.

```
|-- app
|   -- client
|       |-- public
|       |-- src
|         |-- controllers
|         |-- views
|         |-- ui components
|   -- server
|       |-- controllers
```


## Architecture Pattern

The project is built following the MVC (Model View Controller) architecture pattern.
* Client-side: the React components are separated by their role in Controller components and View components.
  * Controller components know how to access and update state and execute domain logic. Such as protocols to interact with the back-end.
  * View components contain UI code, unaware of how state is updated and data retrieved.

* Server-side: the Express server handles the requests coming from the front-end towards the API routes and queries to the [OpenWeather](https://openweathermap.org/api) API are handled by their respective controller.


## API

[Examples of API route, payload, and response.](api.md)


## User Flow and Views

[Screenshots of each View and descriptions of the overall user flow.](appViews.md)


## Requirements

[Details of where and how this app meets the given requirements.](requirements.md)