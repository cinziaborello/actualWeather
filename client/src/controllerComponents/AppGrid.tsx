import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Search from '../viewComponents/Search';
import CurrentWeather from '../viewComponents/CurrentWeather';


const AppGrid: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [data, setData] = useState<any>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const fetchCurrentWeather = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetch(`/api/weather/${keyword}`)
        .then(result => result.json())
        .then(res => setData(res))
        .catch(err => {
          setData('error');
          console.log(err);
        });
    }
  };

  let currentWeather:any;

  if (data) {
    currentWeather = <CurrentWeather data={data} />;
  } else {
    currentWeather = null;
  }

  return (
    <Box >
      <Grid>
          <Search
            handleChange={handleSearchChange}
            handleEnter={fetchCurrentWeather}
            keyword={keyword}
          />
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Box> left </Box>
        </Grid>
        <Grid item xs={4}>
          {currentWeather}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppGrid;