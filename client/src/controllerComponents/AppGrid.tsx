import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopBar from '../viewComponents/TopBar';
import CurrentWeather from '../viewComponents/CurrentWeather';
import ForecastWeather from '../viewComponents/ForecastWeather';
import WelcomeCard from '../viewComponents/WelcomeCard';
import FavoritesList from './FavoritesList';
import CurrentAirQuality from '../viewComponents/CurrentAirQuality';
import { fahrenheitToCelsius, celsiusToFahrenheit } from '../helpers/degreeConverter';
import { AirdataJson } from '../jsonTypes/airdataJson';
import { CurrentWeatherJson } from '../jsonTypes/currentWeatherJson';
import { ForecastJson } from '../jsonTypes/forecastJson';


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
  const [currentData, setCurrentData] = useState<CurrentWeatherJson|null>(null);
  const [currentDataError, setCurrentDataError] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<any|null>(null);
  const [airData, setAirData] = useState<AirdataJson|null>(null);
  const [airDataError, setAirDataError] = useState<boolean>(false);
  const [units, setUnits] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<string[]>([]);

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
      .then(res => {
        setCurrentData(res);
        fetchCurrentAir(res.coord.lat, res.coord.lon);
      })
      .then(() => setForecastData(null))
      .then(() => setKeyword(''))
      .then(() => setCurrentDataError(false))
      .catch(err => {
        setCurrentDataError(true);
        setAirData(null);
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

  const fetchCurrentAir = (lat: number, lon: number): void => {
    fetch(`/api/airquality/${lat}/${lon}`)
      .then(result => result.json())
      .then(res => setAirData(res))
      .catch(err => {
        setAirDataError(true);
        console.log(err);
      });
  };

  const handleDegreesChange = () => {
    if (units) {
      setUnits(false);
      if (currentData) {
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
      if (currentData) {
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
  if (currentData || currentDataError) {
    currentWeather = (
      <CurrentWeather
        units={units}
        data={currentData}
        handleButtonClick={fetchWeatherForecast}
        handleAddFavorite={handleAddFavorite}
        error={currentDataError}
      />
    );
  } else {
    currentWeather = (
      <WelcomeCard />
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
        <Grid item xs={5}>
          {currentWeather}
        </Grid>
        <Grid item xs={4}>
          <CurrentAirQuality
            airData={airData}
            error={airDataError}
          />
        </Grid>
        <Grid item xs={2}>
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