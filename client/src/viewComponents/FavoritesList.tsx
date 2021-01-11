import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import FavoriteCity from './FavoriteCity';


const StyledPaper = withStyles({
  root: {
    margin: '.5rem auto',
    padding: '.5rem',
    width: '90%',
    textAlign: 'left'
  }
})(Paper);

type Props = {
  favorites: string[]
};

const FavoritesList: React.FC<Props> = ({ favorites }) => {
  let listOfCities: JSX.Element|null;
  if (favorites.length === 0) {
    listOfCities = (
      <ErrorCard>
        <ErrorIcon />
          We couldn't retrieve favorite cities.
      </ErrorCard>
    );
  } else if (favorites) {
    const favoritesList: string[] = favorites.slice(0, 9);
    listOfCities = (
      <CustomCard>
        <StyledPaper>
          {favoritesList.map((city: string, index: number) => (
          <FavoriteCity
            name={city}
            key={index.toString()}
          />
          ))}
        </StyledPaper>
      </CustomCard>
    );
  } else {
    listOfCities = null;
  }

  return (
    <Box >
      {listOfCities}
    </Box>
  );
}

export default FavoritesList;