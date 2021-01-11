import React from 'react';
import { Box, Typography } from '@material-ui/core';


type Props = {
  header: string,
  iconSrc: string,
  description: string,
  weatherMain: string,
  actualTemp: number,
  feelsLike: number,
  units: boolean
};

const WeatherInfo: React.FC<Props> = ({ header, iconSrc, description, weatherMain, actualTemp, feelsLike, units }) => {
    let iconURL: string = `http://openweathermap.org/img/wn/${iconSrc}@2x.png`;
    let degrees: string = units === true ? 'C' : 'F';
    // const fahrenheitToCelsius = (tempF: number) => (tempF - 32) / 1.8;
    // const celsiusToFahrenheit = (tempC: number) => (tempC * 1.8) + 32;
    // if (units) {
    //   actualTemp = fahrenheitToCelsius(actualTemp);
    //   feelsLike = fahrenheitToCelsius(feelsLike);
    // } else {
    //   actualTemp = celsiusToFahrenheit(actualTemp);
    //   feelsLike = celsiusToFahrenheit(feelsLike);
    // }
    return (
      <Box>
        <Typography variant='h5' noWrap>
          {header}
        </Typography>
        <img src={iconURL} alt={description} />
        <Typography variant='h6' noWrap>
          {weatherMain}
        </Typography>
        <Typography variant='subtitle2' noWrap>
          Actual: {actualTemp.toFixed()} {degrees}
        </Typography>
        <Typography variant='subtitle2' noWrap>
          Feels like: {feelsLike.toFixed()} {degrees}
        </Typography>
      </Box>
    );
};

export default WeatherInfo;