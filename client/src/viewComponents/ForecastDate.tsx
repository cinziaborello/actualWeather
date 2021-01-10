import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCard from '../style/MyCard';

type Props = {
  dayData: any
};

const ForecastDate: React.FC<Props> = ({ dayData }) => {
  const thisDate: string = new Date(dayData.dt * 1000).toLocaleDateString('en-US', {
    day:   'numeric',
    month: 'short',
    year:  'numeric'
  });

  let thisDayWeather: any;
  if (dayData) {
    let iconURL = `http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`;
    thisDayWeather = (
      <MyCard>
        <Typography>{thisDate}</Typography>
        <img src={iconURL} alt={dayData.weather.description} />
        <Typography>{dayData.weather[0].main}</Typography>
        <Typography>{dayData.temp.day.toFixed()} &#8457; </Typography>
        <Typography>Feels like: {dayData.feels_like.day.toFixed()} &#8457;</Typography>
      </MyCard>
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