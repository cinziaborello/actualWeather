import React from 'react';
import Card from '@material-ui/core/Card';
import WeatherInfo from './WeatherInfo';
import { ForecastJson } from '../jsonTypes/forecastJson';


type Props = {
  units: boolean,
  dayData: ForecastJson
};

const ForecastDate: React.FC<Props> = ({ units, dayData }) => {
  const thisDate: string = new Date(dayData.dt * 1000).toLocaleDateString('en-US', {
    day:   'numeric',
    month: 'short',
    year:  'numeric'
  });

  return (
    <section>
      <Card aria-label={`${thisDate} forecast`}>
        <WeatherInfo
          header={thisDate}
          iconSrc={dayData.weather[0].icon}
          description={dayData.weather[0].description}
          weatherMain={dayData.weather[0].main}
          actualTemp={dayData.temp.day}
          feelsLike={dayData.feels_like.day}
          units={units}
        />
      </Card>
    </section>
  );
};

export default ForecastDate;