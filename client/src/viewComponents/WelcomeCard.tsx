import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import CustomCard from '../uiComponents/CustomCard';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    welcome: {
      background: theme.palette.secondary.main
    }
  })
);

const WelcomeCard: React.FC = () => {
  const classes = useStyles();

  return (
    <CustomCard className={classes.welcome}>
      <Typography variant='h6' noWrap>
        Welcome to Actual Weather!
      </Typography>
      <Typography variant='subtitle2' noWrap>
        To begin, search for a city by name.
      </Typography>
    </CustomCard>
  );
}

export default WelcomeCard;