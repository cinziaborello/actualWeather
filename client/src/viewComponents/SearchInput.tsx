import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import InputBase from '@material-ui/core/InputBase';


type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>)  => void,
  handleEnter: (e: React.KeyboardEvent<HTMLInputElement>)  => void,
  keyword: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
      },
    }
  })
);

const Search: React.FC<Props> = ({ handleChange, handleEnter, keyword }) => {
  const classes = useStyles();

  return (
    <Box>
      <InputBase
        placeholder="Search by city…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search box' }}
        type="text"
        value={keyword}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
    </Box>
  );
}

export default Search;