import React, { useState } from 'react';
import { makeStyles, createStyles, Theme, withStyles, fade } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TopBar from '../viewComponents/TopBar';
import CurrentWeather from '../viewComponents/CurrentWeather';
import ForecastWeather from '../viewComponents/ForecastWeather';
import SearchInput from '../viewComponents/SearchInput';


const StyledCard = withStyles({
  root: {
    background: '#f4f1bb',
    border: 3,
    borderRadius: 10,
    minHeight: '15vh',
    padding: '10px 0',
    margin: '10px 30px',
    textAlign: 'center'
  }
})(Card);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    search: {
      backgroundColor: fade(theme.palette.common.white, 0.50),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.70)
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: '80%'
      },
      margin: '20px 0'
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
          setKeyword('');
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

  let currentWeather:any;
  if (currentData) {
    currentWeather = (
      <CurrentWeather
        data={currentData}
        handleButtonClick={fetchWeatherForecast}
      />
    );
  } else {
    currentWeather = (
      <StyledCard>
        <Typography variant='h6'>
          Welcome to Actual Weather!
        </Typography>
        <Typography variant='subtitle2'>
          To begin, search for a city by name
        </Typography>
        <Box className={classes.search}>
          <SearchInput
            handleChange={handleSearchChange}
            handleEnter={fetchCurrentWeather}
            keyword={keyword}
          />
       </Box>
      </StyledCard>
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
      <ForecastWeather data={forecastData} />
    </div>
  );
}

export default AppGrid;