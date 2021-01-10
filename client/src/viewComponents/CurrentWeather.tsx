import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import ErrorCard from '../style/ErrorCard';
import ErrorIcon from '@material-ui/icons/Error';
import Button from '@material-ui/core/Button';
import Today from './Today';


const StyledCard = withStyles({
  root: {
    background: '#f4f1bb',
    border: 3,
    borderRadius: 10,
    minHeight: '40%',
    padding: '10px 0',
    width: '100%',
    margin: '10px 30px',
    textAlign: 'center'
  }
})(Card);

const StyledPaper = withStyles({
  root: {
    margin: '10px auto',
    padding: '10px',
    width: '80%'
  }
})(Paper);

type Props = {
  data: any,
  handleButtonClick: (lat: number, lon: number) => void
};

const CurrentWeather: React.FC<Props> = ({ data, handleButtonClick }) => {
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
      <StyledCard>
        <Today />
        <StyledPaper>
          <Typography>{data.name}, {data.sys.country}</Typography>
          <img src={iconURL} alt={data.weather.description} />
          <Typography>{data.weather[0].main}</Typography>
          <Typography>{data.main.temp.toFixed()} &#8457; </Typography>
          <Typography>Feels like: {data.main.feels_like.toFixed()} &#8457;</Typography>
        </StyledPaper>
        <Button variant="contained" color="primary" onClick={() => handleButtonClick(data.coord.lat, data.coord.lon)}>See 5 days forecast</Button>
      </StyledCard>
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