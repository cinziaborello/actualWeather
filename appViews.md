# ActualWeather User Flow and Views

This document shows the user flow and how the components appear within the app. While the screenshots have been taken using Chrome, the semantic HTML tags and CSS styles appear consistently across the latest versions of Safari and Firefox. (Note: the app has been optimized using semantic HTML and ARIA tags for users using screenreaders).

When a user opens the app the `AppGrid`, `TopBar`, `SearchInput`, `Today`, `UnitsSwitch`, `WelcomeCard`, `FavoritesList` components render. (Note: this layout needs improvement to fix the grid column width and the whitespace in the middle of the screen).

![Alt ](/screenshots/userOpensApp.png?raw=true "Screenshot of initial app render")


A user types into the search box. The input field's color fades to show that it's in focus.

![Alt ](/screenshots/userTypesInSearchBox.png?raw=true "Screenshot with focus on search box")


The current weather and air quality for a given location are displayed. `CurrentWeather`, `WeatherInfo`, and `CurrentAirQuality` components render.

![Alt ](/screenshots/currentWeatherAndAirQuality.png?raw=true "Screenshot of current weather and air quality for given location")


A user clicks on the `see forecast` button. `ForecastWeather`, `ForecastDate`, and `WeatherInfo` components render.

![Alt ](/screenshots/forecastWeather.png?raw=true "Screenshot of forecast weather for given location")


A user clicks on the `add favorite` button. The `FavoritesList` components re-renders with `FavoritesListEntries` and `FavoriteCity`. (Note: The backgrounds of distinct parts are different in an attempt to provide visual cues of what each section is for).

![Alt ](/screenshots/addFavoriteCity.png?raw=true "Screenshot of favorites list with first city added")


After adding multiple cities, the `see more cities` button appears within the `FavoritesList` component.

![Alt ](/screenshots/seeMoreCities.png?raw=true "Screenshot of favorites list longer than 7 with see more button")


If `see more cities` button is clicked the list of cities expands and the `see less cities` button appears instead.

![Alt ](/screenshots/seeLessCities.png?raw=true "Screenshot of favorites list longer than 7 with see less button")


If a user clicks on one of the favorite cities, current weather and air quality for that city render.

![Alt ](/screenshots/clickOnFavorite.png?raw=true "Screenshot of click on a favorite city")


If a user toggles between Fahrenheit and Celsius all components containing temperatures re-render.

![Alt ](/screenshots/switchToCelsius.png?raw=true "Screenshot of all weather data components with temperature in Celsius")


(Note: all call to actions in the app are designed with buttons to increase keyboard accessibility).

