import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button, Typography } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import WeatherInfo from './WeatherInfo';
import { CurrentWeatherJson } from '../jsonTypes/currentWeatherJson';


const StyledPaper = withStyles({
  root: {
    margin: '.9rem auto',
    padding: '.5rem',
    width: '80%'
  }
})(Paper);

type Props = {
  units : boolean,
  data: CurrentWeatherJson|null,
  handleButtonClick: (lat: number, lon: number) => void,
  handleAddFavorite: (city: string) => void,
  error: boolean
};

const CurrentWeather: React.FC<Props> = ({ units, data, handleButtonClick, handleAddFavorite, error }) => {
  let current: JSX.Element|null;
  if (error) {
    current = (
      <ErrorCard role="alert" aria-label="error message, invalid search">
        <ErrorIcon aria-hidden="true" />
        Invalid city name, please try again.
      </ErrorCard>
    );
  } else if (data) {
    const city = `${data.name}, ${data.sys.country}`;
    current = (
      <CustomCard aria-hidden="true">
        <header>
          <Typography display="inline" noWrap>
            <LocationCityIcon fontSize="small" aria-hidden="true" /> Currently in
          </Typography>
        </header>
        <section>
          <StyledPaper aria-live="assertive" aria-atomic="true">
            <WeatherInfo
              header={city}
              iconSrc={data.weather[0].icon}
              description={data.weather[0].description}
              weatherMain={data.weather[0].main}
              actualTemp={data.main.temp}
              feelsLike={data.main.feels_like}
              units={units}
            />
          </StyledPaper>
        </section>
        <Button variant="contained" color="primary" size="small" aria-label="click to see forecast"
          onClick={() => handleButtonClick(data.coord.lat, data.coord.lon)}>
          See forecast
        </Button>
        <Button variant="contained" color="secondary" size="small"
          endIcon={<FavoriteBorderIcon fontSize="small" aria-hidden="true" />}
          onClick={() => handleAddFavorite(city)}
          aria-label="add city to favorites">
          Add
        </Button>
      </CustomCard>
    );
  } else {
    current = null;
  }

  return (
    <article>
      {current}
    </article>
  );
};

export default CurrentWeather;