import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Search from '../viewComponents/Search';
import CurrentWeather from '../viewComponents/CurrentWeather';


const AppGrid: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
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

  let currentWeather;

  if (data) {
    currentWeather = <CurrentWeather data={data} />;
  } else {
    currentWeather = <Box>right column</Box>;
  }

  return (
    <Box >
      <Grid container spacing={1}>
          <Search handleChange={handleChange} handleEnter={handleEnter} keyword={keyword} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          {currentWeather}
        </Grid>
        <Grid item>
          <Box>left column</Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppGrid;