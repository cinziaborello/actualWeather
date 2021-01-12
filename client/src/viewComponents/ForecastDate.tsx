import React from 'react';
import { Box, Card } from '@material-ui/core';
import WeatherInfo from './WeatherInfo';
import { ForecastJson } from '../jsonTypes/forecastJson';


type Props = {
  units: boolean,
  dayData: ForecastJson
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
      <Card>
        <WeatherInfo
          header={thisDate}
          iconSrc={dayData.weather[0].icon}
          description={dayData.weather[0].description}
          weatherMain={dayData.weather[0].main}
          actualTemp={dayData.temp.day}
          feelsLike={dayData.feels_like.day}
          units={units}
        />
      </Card>
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