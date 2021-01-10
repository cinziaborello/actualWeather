import React from 'react';
import { makeStyles, createStyles, Theme, fade } from '@material-ui/core/styles';
import { Box, Card, Typography } from '@material-ui/core';
import SearchInput from './SearchInput';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      backgroundColor: fade(theme.palette.common.white, 0.50),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.70)
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: '80%'
      },
      margin: theme.spacing(2)
    },
    welcome: {
      backgroundColor: '#f4f1bb',
      border: 3,
      borderRadius: theme.shape.borderRadius,
      minHeight: '10rem',
      padding: theme.spacing(3),
      margin: theme.spacing(3),
      textAlign: 'center'
    }
  })
);

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string
}

const WelcomeCard: React.FC<Props> = ({ handleChange, handleEnter, keyword }) => {
  const classes = useStyles();

  return (
    <Card className={classes.welcome}>
      <Typography variant='h6' noWrap>
        Welcome to Actual Weather!
      </Typography>
      <Typography variant='subtitle2' noWrap>
        To begin, search for a city by name
      </Typography>
      <Box className={classes.search}>
        <SearchInput
          handleChange={handleChange}
          handleEnter={handleEnter}
          keyword={keyword}
        />
      </Box>
    </Card>
  );
}

export default WelcomeCard;