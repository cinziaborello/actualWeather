import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, GridList, GridListTile } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import ForecastDate from './ForecastDate';
import { ForecastJson } from '../jsonTypes/forecastJson';


const StyledBox = withStyles({
  root: {
    margin: '0 3rem'
  }
})(Box);

const StyledGridList = withStyles({
  root: {
    background: '#424242',
    padding: '1rem',
    border: 3,
    borderRadius: 10,
    textAlign: 'center'
  }
})(GridList);

type Props = {
  units: boolean,
  data: ForecastJson[]|null,
  error: boolean
};

const ForecastWeather: React.FC<Props> = ({ units, data, error }) => {

  let forecast: JSX.Element|null;
  if (error) {
    forecast = (
      <ErrorCard role="alert" aria-label="error message, no forecast data available">
        <ErrorIcon aria-hidden="true" />
          We couldn't retrieve the forecast.
      </ErrorCard>
    );
  } else if (data) {
    const fiveDaysForecast: ForecastJson[] = data.slice(1, 6);
    forecast = (
      <StyledGridList cols={5} cellHeight="auto" spacing={15} aria-setsize={5} aria-label="five day forecast">
        {fiveDaysForecast.map((day: ForecastJson, index: number) => (
          <GridListTile aria-posinset={index}>
            <ForecastDate
              units={units}
              dayData={day}
              key={day.dt.toString()}
            />
          </GridListTile>
        ))}
      </StyledGridList>
    );
  } else {
    forecast = null;
  }

  return (
    <section aria-live="assertive" aria-atomic="true">
      <StyledBox aria-hidden="true">
        {forecast}
      </StyledBox>
    </section>
  );
};

export default ForecastWeather;