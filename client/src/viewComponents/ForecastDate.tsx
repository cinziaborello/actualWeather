import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Card } from '@material-ui/core';
import WeatherInfo from './WeatherInfo';


const StyledCard = withStyles({
  root: {
    background: '#fff'
  }
})(Card);

type Props = {
  units: boolean,
  dayData: any
};

const ForecastDate: React.FC<Props> = ({ units, dayData }) => {
  const thisDate: string = new Date(dayData.dt * 1000).toLocaleDateString('en-US', {
    day:   'numeric',
    month: 'short',
    year:  'numeric'
  });

  let thisDayWeather: JSX.Element|null;
  if (dayData) {
    thisDayWeather = (
      <StyledCard>
        <WeatherInfo
          header={thisDate}
          iconSrc={dayData.weather[0].icon}
          description={dayData.weather.description}
          weatherMain={dayData.weather[0].main}
          actualTemp={dayData.temp.day}
          feelsLike={dayData.feels_like.day}
          units={units}
        />
      </StyledCard>
    );
  } else {
    thisDayWeather = null;
  }

  return (
    <Box>
      {thisDayWeather}
    </Box>
  );
};

export default ForecastDate;