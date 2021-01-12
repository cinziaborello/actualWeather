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
    background: '#ffee33',
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
      <ErrorCard>
        <ErrorIcon aria-label="error icon" />
          We couldn't retrieve the forecast.
      </ErrorCard>
    );
  } else if (data) {
    const fiveDaysForecast = data.slice(1, 6);
    forecast = (
      <StyledBox>
      <StyledGridList cols={5} cellHeight="auto" spacing={15}>
        {fiveDaysForecast.map((day: ForecastJson) => (
          <GridListTile>
            <ForecastDate
              units={units}
              dayData={day}
              key={day.dt.toString()}
            />
          </GridListTile>
        ))}
      </StyledGridList>
      </StyledBox>
    );
  } else {
    forecast = null;
  }

  return (
    <Box>
      {forecast}
    </Box>
  );
};

export default ForecastWeather;