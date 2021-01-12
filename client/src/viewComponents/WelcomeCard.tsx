import React from 'react';
import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import CustomCard from '../uiComponents/CustomCard';
import SearchInput from './SearchInput';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    welcome: {
      background: theme.palette.secondary.main
    }
  })
);

type Props = {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string
}

const WelcomeCard: React.FC<Props> = ({ handleSearchChange, handleEnter, keyword }) => {
  const classes = useStyles();

  return (
    <CustomCard className={classes.welcome}>
      <Typography variant='h6' noWrap>
        Welcome to Actual Weather!
      </Typography>
      <Typography variant='subtitle2' noWrap>
        To begin, search for a city by name
      </Typography>
      <Box>
        <SearchInput
          handleChange={handleSearchChange}
          handleEnter={handleEnter}
          keyword={keyword}
        />
      </Box>
    </CustomCard>
  );
}

export default WelcomeCard;