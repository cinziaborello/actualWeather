import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCard from '../style/MyCard';
import Today from './Today';


type Props = {
  data: any
};

const CurrentWeather: React.FC<Props> = ({ data }) => {
  let current;
  if (data === 'error') {
    current = <Typography color="error">Invalid city name</Typography>
  } else if (data) {
    let iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    current = (
      <MyCard>
        <Today />
        <Typography>{data.name}</Typography>
        <img src={iconURL} alt="weather icon" />
        <Typography>{data.weather[0].main}</Typography>
        <Typography>{data.main.temp.toFixed()} &#8457; </Typography>
        <Typography>Feels like: {data.main.feels_like.toFixed()} &#8457;</Typography>
      </MyCard>
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