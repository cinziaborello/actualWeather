import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography, Button } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import FavoriteCity from '../viewComponents/FavoriteCity';


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
  fetchCurrentWeather: (city: string) => void,
  fetchFavorites: () => void
};

const FavoritesList: React.FC<Props> = ({ favorites, fetchCurrentWeather, fetchFavorites }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleViewCityClick = (city: string): void => {
    fetchCurrentWeather(city);
  };

  const handleDeleteCityClick = (city: string): void => {
    fetch(`/api/favorites/${city}`, {
      method: 'delete'
    })
      .then(() => fetchFavorites())
      .catch(err => console.log(err));
  };

  const handleSeeMoreClick = (): void => {
    setIsExpanded(true);
  };

  const handleSeeLessClick = (): void => {
    setIsExpanded(false);
  };


  let listOfCities: JSX.Element|null;
  if (favorites.length === 0) {
    listOfCities = (
      <ErrorCard>
        <ErrorIcon aria-label="error icon" />
        No favorite cities.
      </ErrorCard>
    );
  } else if (favorites.length > 8) {
    if (!isExpanded) {
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
          <Button variant="text" size="small" aria-label="see more cities"
            onClick={handleSeeMoreClick} >
            See more cities
          </Button>
        </CustomCard>
      );
    } else {
      listOfCities = (
        <CustomCard>
          <Typography display="inline" noWrap>
            <FavoriteIcon fontSize="small" aria-label="favorites icon" /> Favorite cities
          </Typography>
          <StyledPaper>
            {favorites.map((city: string, index: number) => (
              <FavoriteCity
                name={city}
                key={index.toString()}
                handleViewCityClick={handleViewCityClick}
                handleDeleteCityClick={handleDeleteCityClick}
              />
            ))}
          </StyledPaper>
          <Button variant="text" size="small" aria-label="see less cities"
            onClick={handleSeeLessClick} >
            See less cities
          </Button>
        </CustomCard>
      );
    }
  } else {
    listOfCities = (
      <CustomCard>
        <Typography display="inline" noWrap>
          <FavoriteIcon fontSize="small" aria-label="favorites icon" /> Favorite cities
        </Typography>
        <StyledPaper>
          {favorites.map((city: string, index: number) => (
            <FavoriteCity
              name={city}
              key={index.toString()}
              handleViewCityClick={handleViewCityClick}
              handleDeleteCityClick={handleDeleteCityClick}
            />
          ))}
        </StyledPaper>
      </CustomCard>
    );
  }

  return (
    <Box >
      {listOfCities}
    </Box>
  );
}

export default FavoritesList;