import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import FavoriteCity from './FavoriteCity';


const StyledPaper = withStyles({
  root: {
    margin: '.5rem auto',
    paddingLeft: '1rem',
    width: '88%',
    textAlign: 'left'
  }
})(Paper);

type Props = {
  favorites: string[],
  handleViewCityClick: (city: string)  => void,
  handleDeleteCityClick: (city: string) => void
};

const FavoritesList: React.FC<Props> = ({ favorites, handleViewCityClick, handleDeleteCityClick }) => {
  let listOfCities: JSX.Element|null;
  if (favorites.length === 0) {
    listOfCities = (
      <ErrorCard>
        <ErrorIcon aria-label="error icon" />
        We couldn't retrieve favorite cities.
      </ErrorCard>
    );
  } else if (favorites) {
    const favoritesList: string[] = favorites.slice(0, 8);
    listOfCities = (
      <CustomCard>
        <Typography display="inline" noWrap>
          <FavoriteIcon fontSize="small" aria-label="favorites icon" /> Favorite cities
        </Typography>
        <StyledPaper>
          {favoritesList.map((city: string, index: number) => (
            <FavoriteCity
              name={city}
              key={index.toString()}
              handleViewCityClick={handleViewCityClick}
              handleDeleteCityClick={handleDeleteCityClick}
            />
          ))}
        </StyledPaper>
        <Button variant="text" size="small" aria-label="see more cities">
          See more cities
        </Button>
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