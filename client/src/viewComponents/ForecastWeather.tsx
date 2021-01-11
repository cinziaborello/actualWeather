import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, GridList, GridListTile } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import ForecastDate from './ForecastDate';


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
  data: any,
};

const ForecastWeather: React.FC<Props> = ({ units, data }) => {
  let forecast: JSX.Element|null;
  if (data === 'error') {
    forecast = (
      <ErrorCard>
        <ErrorIcon />
          We couldn't retrieve the forecast.
      </ErrorCard>
    );
  } else if (data) {
    const fiveDaysForecast: any[] = data.daily.slice(1, 6);
    forecast = (
      <StyledBox>
      <StyledGridList cols={5} cellHeight="auto" spacing={15}>
        {fiveDaysForecast.map((day: any) => (
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