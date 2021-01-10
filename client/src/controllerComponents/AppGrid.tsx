import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Search from '../viewComponents/Search';
import CurrentWeather from '../viewComponents/CurrentWeather';
import ForecastWeather from '../viewComponents/ForecastWeather';


const AppGrid: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [currentData, setCurrentData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);
  const [units, setUnits] = useState<string>('imperial');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const fetchCurrentWeather = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetch(`/api/current/${keyword}/${units}`)
        .then(result => result.json())
        .then(res => setCurrentData(res))
        .then(() => setForecastData(null))
        .catch(err => {
          setCurrentData('error');
          console.log(err);
        });
    }
  };

  const fetchWeatherForecast = (lat: number, lon: number): void => {
    fetch(`/api/forecast/${lat}/${lon}/${units}`)
      .then(result => result.json())
      .then(res => setForecastData(res))
      .catch(err => {
        setForecastData('error');
        console.log(err);
      });
  };


  let currentWeather:any;

  if (currentData) {
    currentWeather = <CurrentWeather data={currentData} handleButtonClick={fetchWeatherForecast} />;
  } else {
    currentWeather = null;
  }

  return (
    <Box >
      <div>
          <Search
            handleChange={handleSearchChange}
            handleEnter={fetchCurrentWeather}
            keyword={keyword}
          />
      </div>
      <div >
        <div >
        </div>
        <div >
          {currentWeather}
        </div>
      </div>

        <div >
          <ForecastWeather data={forecastData} />

      </div>
    </Box>
  );
}

export default AppGrid;