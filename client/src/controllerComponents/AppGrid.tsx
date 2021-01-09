import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Search from '../viewComponents/Search';
import Today from '../viewComponents/Today';


const AppGrid: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') {
      fetch(`/api/weather/${keyword}`)
        .then(result => result.text())
        .then(res => setData(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <div >
      <Grid container spacing={1}>
          <Search handleChange={handleChange} handleEnter={handleEnter} keyword={keyword} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Today />
          {data}
        </Grid>
        <Grid item xs={2}>
          <div>left column</div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AppGrid;