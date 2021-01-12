import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopBar from '../viewComponents/TopBar';
import CurrentWeather from '../viewComponents/CurrentWeather';
import ForecastWeather from '../viewComponents/ForecastWeather';
import WelcomeCard from '../viewComponents/WelcomeCard';
import FavoritesList from './FavoritesList';


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const AppGrid: React.FC = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState<string>('');
  const [currentData, setCurrentData] = useState<any|null>(null);
  const [forecastData, setForecastData] = useState<any|null>(null);
  const [units, setUnits] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<any>([]);

  const degrees: string = units === true ? 'metric' : 'imperial';

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = (): void => {
    fetch('/api/favorites/')
      .then(result => result.json())
      .then(res => setFavorites(res))
      .catch(err => {
        setFavorites([]);
        console.log(err);
      });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetchCurrentWeather(keyword);
    }
  };

  const fetchCurrentWeather = (city: string): void => {
    fetch(`/api/current/${city}/${degrees}`)
      .then(result => result.json())
      .then(res => setCurrentData(res))
      .then(() => setForecastData(null))
      .then(() => setKeyword(''))
      .catch(err => {
        setCurrentData('error');
        setForecastData(null);
        console.log(err);
      });
  };

  const fetchWeatherForecast = (lat: number, lon: number): void => {
    fetch(`/api/forecast/${lat}/${lon}/${degrees}`)
      .then(result => result.json())
      .then(res => setForecastData(res))
      .catch(err => {
        setForecastData([]);
        console.log(err);
      });
  };

  const handleDegreesChange = () => {
    const fahrenheitToCelsius = (tempF: number) => (tempF - 32) / 1.8;
    const celsiusToFahrenheit = (tempC: number) => (tempC * 1.8) + 32;

    if (units) {
      setUnits(false);
      if (currentData && currentData !== 'error') {
        currentData.main.temp = celsiusToFahrenheit(currentData.main.temp);
        currentData.main.feels_like = celsiusToFahrenheit(currentData.main.feels_like);
      }
      if (forecastData && forecastData !== 'error') {
        forecastData.daily.forEach((forecast: any) => {
          forecast.temp.day = celsiusToFahrenheit(forecast.temp.day);
          forecast.feels_like.day = celsiusToFahrenheit(forecast.feels_like.day);
        });
      }
    } else {
      setUnits(true);
      if (currentData && currentData !== 'error') {
        currentData.main.temp = fahrenheitToCelsius(currentData.main.temp);
        currentData.main.feels_like = fahrenheitToCelsius(currentData.main.feels_like);
      }
      if (forecastData && forecastData !== 'error') {
        forecastData.daily.forEach((forecast: any) => {
          forecast.temp.day = fahrenheitToCelsius(forecast.temp.day);
          forecast.feels_like.day = fahrenheitToCelsius(forecast.feels_like.day);
        });
      }
    }
  };

  const handleAddFavorite = (city: string): void => {
    fetch(`/api/favorites/${city}`, {
      method: 'post'
    })
      .then(() => fetchFavorites())
      .catch(err => console.log(err));
  };


  let currentWeather: JSX.Element;
  if (currentData) {
    currentWeather = (
      <CurrentWeather
        units={units}
        data={currentData}
        handleButtonClick={fetchWeatherForecast}
        handleAddFavorite={handleAddFavorite}
      />
    );
  } else {
    currentWeather = (
      <WelcomeCard
        handleSearchChange={handleSearchChange}
        handleEnter={handleSearchEnter}
        keyword={keyword}
      />
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopBar
            handleSearchChange={handleSearchChange}
            handleEnter={handleSearchEnter}
            keyword={keyword}
            units={units}
            handleDegreesChange={handleDegreesChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={4}>
          {currentWeather}
        </Grid>
        <Grid item xs={4}>
          {/* <Paper className={classes.paper}>other column</Paper> */}
          <FavoritesList
            favorites={favorites}
            fetchCurrentWeather={fetchCurrentWeather}
            fetchFavorites={fetchFavorites}
          />
        </Grid>
      </Grid>
      <ForecastWeather
        units={units}
        data={forecastData}
      />
    </div>
  );
}

export default AppGrid;