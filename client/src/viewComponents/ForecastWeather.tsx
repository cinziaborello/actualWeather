import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ErrorCard from '../style/ErrorCard';
import ErrorIcon from '@material-ui/icons/Error';
import ForecastDate from './ForecastDate';


const StyledBox = withStyles({
  root: {
    margin: '0 30px'
  }
})(Box);

const StyledGridList = withStyles({
  root: {
    background: '#ff6640',
    padding: '10px',
    border: 3,
    borderRadius: 10,
    textAlign: 'center'
  }
})(GridList);

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
    const fiveDaysForecast = data.daily.slice(0, 5);
    forecast = (
      <StyledBox>
      <StyledGridList cols={5} cellHeight="auto" spacing={15}>
        {fiveDaysForecast.map((day: any) => (
          <GridListTile>
            <ForecastDate
              dayData={day}
              key={day.dt}
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