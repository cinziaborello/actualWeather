import React, { useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TopBar from '../viewComponents/TopBar';
import CurrentWeather from '../viewComponents/CurrentWeather';
import ForecastWeather from '../viewComponents/ForecastWeather';
import WelcomeCard from '../viewComponents/WelcomeCard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    }
  })
);

const AppGrid: React.FC = () => {
  const classes = useStyles();

  const [keyword, setKeyword] = useState<string>('');
  const [currentData, setCurrentData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [units, setUnits] = useState<boolean>(false);

  const degrees: string = units === true ? 'metric' : 'imperial';

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetchCurrentWeather();
    }
  };

  const fetchCurrentWeather = (): void => {
    fetch(`/api/current/${keyword}/${degrees}`)
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
        setForecastData('error');
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

  let currentWeather: JSX.Element;
  if (currentData) {
    currentWeather = (
      <CurrentWeather
        units={units}
        data={currentData}
        handleButtonClick={fetchWeatherForecast}
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
        {/* <Grid item xs={4}>
          <Paper className={classes.paper}>other column</Paper>
        </Grid> */}
      </Grid>
      <ForecastWeather
        units={units}
        data={forecastData}
      />
    </div>
  );
}

export default AppGrid;