import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MyCard from '../style/MyCard';
import ErrorCard from '../style/ErrorCard';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import Today from './Today';

type Props = {
  data: any
};

const CurrentWeather: React.FC<Props> = ({ data }) => {
  let current:any;
  if (data === 'error') {
    current = (
      <ErrorCard>
          <ErrorIcon />
          Invalid city name
      </ErrorCard>);
  } else if (data) {
    let iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    current = (
      <MyCard>
        <Today />
        <Typography>{data.name}, {data.sys.country}</Typography>
        <img src={iconURL} alt={data.weather.description} />
        <Typography>{data.weather[0].main}</Typography>
        <Typography>{data.main.temp.toFixed()} &#8457; </Typography>
        <Typography>Feels like: {data.main.feels_like.toFixed()} &#8457;</Typography>
        <Button>See forecast</Button>
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