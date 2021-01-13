import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import TodayIcon from '@material-ui/icons/Today';
import Today from './Today';
import SearchInput from './SearchInput';
import UnitsSwitch from './UnitsSwitch';


const useStyles = makeStyles(() =>
  createStyles({
    grow: {
      flexGrow: 1
    }
  })
);

type Props = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string,
  units: boolean,
  handleDegreesChange: ()  => void
}

const TopBar: React.FC<Props> = ({ handleSearchChange, handleEnter, keyword, units, handleDegreesChange }) => {
  const classes = useStyles();

  return (
    <header className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <CloudIcon aria-hidden="true" />
          <WbSunnyIcon aria-hidden="true" />
          <Typography variant="h4" noWrap aria-label="website name">
              Actual Weather
          </Typography>
          <SearchInput
            handleChange={handleSearchChange}
            handleEnter={handleEnter}
            keyword={keyword}
          />
          <TodayIcon aria-hidden="true" />
          <Today />
          <UnitsSwitch
            units={units}
            handleDegreesChange={handleDegreesChange}
          />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default TopBar;