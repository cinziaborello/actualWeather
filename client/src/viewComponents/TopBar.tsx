import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Box, AppBar, Toolbar, Typography, Switch } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TodayIcon from '@material-ui/icons/Today';
import Today from './Today';
import SearchInput from './SearchInput';


type Props = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string,
  units: boolean,
  handleDegreesChange: ()  => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    unitsSwitch: {
      padding: theme.spacing(0, 1),
      marginLeft: theme.spacing(3),
      color: theme.palette.common.white
    }
  })
);

const Search: React.FC<Props> = ({ handleSearchChange, handleEnter, keyword, units, handleDegreesChange }) => {
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
            handleChange={handleSearchChange}
            handleEnter={handleEnter}
            keyword={keyword}
          />
          <TodayIcon />
          <Today />
          <Box className={classes.unitsSwitch}>
            <Typography variant="h6" display="inline" noWrap>
              &#8457;
            </Typography>
            <Switch
              checked={units}
              onChange={handleDegreesChange}
              name="degrees"
              color="default"
              size="small"
              inputProps={{ 'aria-label': 'Switch between Fahrenheit and Celsius' }}
            />
            <Typography variant="h6" display="inline" noWrap>
              &#8451;
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Search;