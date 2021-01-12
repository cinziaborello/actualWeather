import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Paper } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import FavoriteCity from './FavoriteCity';


const StyledPaper = withStyles({
  root: {
    margin: '.8rem auto',
    paddingLeft: '1rem',
    width: '88%',
    textAlign: 'left'
  }
})(Paper);

type Props = {
  favorites: string[],
  handleViewCityClick: (name: string)  => void
};

const FavoritesList: React.FC<Props> = ({ favorites, handleViewCityClick }) => {
  let listOfCities: JSX.Element|null;
  if (favorites.length === 0) {
    listOfCities = (
      <ErrorCard>
        <ErrorIcon />
          We couldn't retrieve favorite cities.
      </ErrorCard>
    );
  } else if (favorites) {
    const favoritesList: string[] = favorites.reverse().slice(0, 6);
    listOfCities = (
      <CustomCard>
        <StyledPaper>
          {favoritesList.map((city: string, index: number) => (
          <FavoriteCity
            name={city}
            key={index.toString()}
            handleViewCityClick={handleViewCityClick}
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