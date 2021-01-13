import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FavoriteCity from '../viewComponents/FavoriteCity';


const StyledPaper = withStyles({
  root: {
    margin: '.7rem auto',
    paddingLeft: '1rem',
    width: '88%',
    textAlign: 'left'
  }
})(Paper);

type Props = {
  favorites: string[],
  handleViewCityClick: (city: string) => void,
  handleDeleteCityClick: (city: string) => void
};

const FavoritesListEntries: React.FC<Props> = ({ favorites, handleViewCityClick, handleDeleteCityClick }) => (
  <section>
    <StyledPaper role="list" aria-live="assertive" aria-atomic="true" aria-setsize={favorites.length}>
      {favorites.map((city: string, index: number) => (
        <FavoriteCity
          name={city}
          key={index.toString()}
          handleViewCityClick={handleViewCityClick}
          handleDeleteCityClick={handleDeleteCityClick}
          aria-posinset={index}
        />
      ))}
    </StyledPaper>
  </section>
);

export default FavoritesListEntries;