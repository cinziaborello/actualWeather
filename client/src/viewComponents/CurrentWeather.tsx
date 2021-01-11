import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Card, Paper, Button } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import WeatherInfo from './WeatherInfo';


const StyledCard = withStyles({
  root: {
    background: '#ffee33',
    border: 3,
    borderRadius: 10,
    minHeight: '40%',
    padding: '1rem 0',
    width: '100%',
    margin: '1rem 3rem',
    textAlign: 'center'
  }
})(Card);

const StyledPaper = withStyles({
  root: {
    margin: '1rem auto',
    padding: '.5rem',
    width: '80%'
  }
})(Paper);

type Props = {
  units : boolean,
  data: any,
  handleButtonClick: (lat: number, lon: number) => void
};

const CurrentWeather: React.FC<Props> = ({ units, data, handleButtonClick }) => {
  let current: JSX.Element|null;
  if (data === 'error') {
    current = (
      <ErrorCard>
        <ErrorIcon />
        Invalid city name, please try again.
      </ErrorCard>
    );
  } else if (data) {
    let city = `${data.name}, ${data.sys.country}`;
    current = (
      <StyledCard>
        Currently in
        <StyledPaper>
          <WeatherInfo
            header={city}
            iconSrc={data.weather[0].icon}
            description={data.weather.description}
            weatherMain={data.weather[0].main}
            actualTemp={data.main.temp}
            feelsLike={data.main.feels_like}
            units={units}
          />
        </StyledPaper>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick(data.coord.lat, data.coord.lon)}>
          See 5 days forecast
        </Button>
      </StyledCard>
    );
  } else {
    current = null;
  }

  return (
    <Box>
      {current}
    </Box>
  );
};

export default CurrentWeather;