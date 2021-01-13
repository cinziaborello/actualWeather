# ActualWeather

ActualWeather is a full-stack web app to search for current weather and air quality conditions by city, discover the following days forecast, and easily switch between Fahrenheit and Celsius.


## Overview



## Instructions to install and start the app

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

The server runs on http://localhost:8080.


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
* Client-side: the React components are separated by their role in Controller Components and View Components.
  * Controller components know how to access and update state and execute domain logic. Such as protocols to interact with the back-end.
  * View components contain UI code, unaware of how state is updated and data retrieved.

* Server-side: the Express server handles the request coming from the front-end towards the API routes and queries to the [OpenWeather](https://openweathermap.org/api) API are handled by their respective controller.


## API

[Examples of API route, payload, and response.](api.md)


## User Flow and Views

[Screenshots of each View and descriptions of the overall user flow.](appViews.md)


## Requirements

[Details of where and how this app meets the given requirements.](requirements.md)