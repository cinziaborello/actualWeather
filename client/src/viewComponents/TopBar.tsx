import React from 'react';
import { makeStyles, Theme, createStyles, fade } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloudIcon from '@material-ui/icons/Cloud';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';
import TodayIcon from '@material-ui/icons/Today';
import Today from './Today';
import SearchInput from '../viewComponents/SearchInput';


type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.25),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.45),
      },
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5),
        width: '25%',
      },
    },
    iconSearch: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
          <Typography variant="h6" noWrap>
              Actual Weather
          </Typography>
          <Box className={classes.search}>
            <Box className={classes.iconSearch}>
              <SearchIcon />
            </Box>
            <SearchInput
              handleChange={handleChange}
              handleEnter={handleEnter}
              keyword={keyword}
            />
          </Box>
          <TodayIcon />
          <Today />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Search;