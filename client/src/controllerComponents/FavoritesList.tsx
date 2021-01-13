import React, { useState } from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import FavoritesListEntries from '../viewComponents/FavoritesListEntries';


const StyledCard = withStyles({
  root: {
    background: '#ffee33'
  }
})(CustomCard);

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


  const favoritesList: string[] = isExpanded === false ? favorites.slice(0, 7) : [...favorites];

  const listheader: JSX.Element = (
    <header>
      <Typography display="inline" noWrap>
        <FavoriteIcon fontSize="small" aria-hidden="true" /> Favorite cities
      </Typography>
    </header>
  );

  let overflowButtons: JSX.Element;
  if (isExpanded === false) {
    overflowButtons = (
      <Button variant="text" size="small" aria-label="see more cities"
        onClick={handleSeeMoreClick} >
        See more cities
      </Button>
    );
  } else {
    overflowButtons = (
      <Button variant="text" size="small" aria-label="see less cities"
        onClick={handleSeeLessClick} >
        See less cities
      </Button>
    );
  }

  let listOfCities: JSX.Element;
  if (favorites.length === 0) {
    listOfCities = (
      <ErrorCard role="alert" aria-label="no favorites">
        <ErrorIcon aria-hidden="true" />
        No favorite cities.
      </ErrorCard>
    );
  } else if (favorites.length > 7) {
    listOfCities = (
      <StyledCard aria-hidden="true">
        {listheader}
        <FavoritesListEntries
          favorites={favoritesList}
          handleViewCityClick={handleViewCityClick}
          handleDeleteCityClick={handleDeleteCityClick}
        />
        {overflowButtons}
      </StyledCard>
      );
  } else {
    listOfCities = (
      <StyledCard aria-hidden="true">
        {listheader}
        <FavoritesListEntries
          favorites={favoritesList}
          handleViewCityClick={handleViewCityClick}
          handleDeleteCityClick={handleDeleteCityClick}
        />
      </StyledCard>
      );
    }

  return (
    <aside>
      {listOfCities}
    </aside>
  );
}

export default FavoritesList;