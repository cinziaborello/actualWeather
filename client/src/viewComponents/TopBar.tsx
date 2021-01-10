import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Box, AppBar, Toolbar, Typography } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TodayIcon from '@material-ui/icons/Today';
import Today from './Today';
import SearchInput from './SearchInput';


type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
);

const Search: React.FC<Props> = ({ handleChange, handleEnter, keyword }) => {
  const classes = useStyles();

  return (
    <Box className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <CloudIcon />
          <WbSunnyIcon />
          <Typography variant="h4" noWrap>
              Actual Weather
          </Typography>
          <SearchInput
            handleChange={handleChange}
            handleEnter={handleEnter}
            keyword={keyword}
          />
          <TodayIcon />
          <Today />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Search;