import React from 'react';
import Typography from '@material-ui/core/Typography';


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
    const iconURL = `http://openweathermap.org/img/wn/${iconSrc}@2x.png`;
    const degrees: string = units === true ? 'C' : 'F';

    return (
      <section aria-label="weather information">
        <header>
          <Typography variant='h5' noWrap>
            {header}
          </Typography>
        </header>
        <img src={iconURL} alt={description} title={description} aria-label="icon representing current weather" />
        <section>
          <Typography variant='h6' noWrap>
            {weatherMain}
          </Typography>
          <Typography variant='subtitle2' noWrap>
            Actual: {actualTemp.toFixed()} {degrees}
          </Typography>
          <Typography variant='subtitle2' noWrap>
            Feels like: {feelsLike.toFixed()} {degrees}
          </Typography>
        </section>
      </section>
    );
};

export default WeatherInfo;