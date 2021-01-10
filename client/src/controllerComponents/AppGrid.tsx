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
  const [units, setUnits] = useState<string>('imperial');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const fetchCurrentWeather = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetch(`/api/current/${keyword}/${units}`)
        .then(result => result.json())
        .then(res => setCurrentData(res))
        .then(() => setForecastData(null))
        .then(() => setKeyword(''))
        .catch(err => {
          setCurrentData('error');
          setForecastData(null);
          console.log(err);
        });
    }
  };

  const fetchWeatherForecast = (lat: number, lon: number): void => {
    fetch(`/api/forecast/${lat}/${lon}/${units}`)
      .then(result => result.json())
      .then(res => setForecastData(res))
      .catch(err => {
        setForecastData('error');
        console.log(err);
      });
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
        handleChange={handleSearchChange}
        handleEnter={fetchCurrentWeather}
        keyword={keyword}
      />
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TopBar
            handleChange={handleSearchChange}
            handleEnter={fetchCurrentWeather}
            keyword={keyword}
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