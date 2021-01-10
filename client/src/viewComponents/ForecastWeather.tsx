import React from 'react';
import Box from '@material-ui/core/Box';
import ErrorCard from '../style/ErrorCard';
import ErrorIcon from '@material-ui/icons/Error';
import ForecastDate from './ForecastDate';

type Props = {
  data: any
};

const ForecastWeather: React.FC<Props> = ({ data }) => {
  let forecast:any;
  if (data === 'error') {
    forecast = (
      <ErrorCard>
          <ErrorIcon />
          We couldn't retrieve the forecast.
      </ErrorCard>);
  } else if (data) {
    forecast = data.daily.map((day: any) => (
      <ForecastDate dayData={day} />
    ));
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