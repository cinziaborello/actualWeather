import React from 'react';
import { Typography, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


type Props = {
  name: string,
  handleViewCityClick: (city: string)  => void,
  handleDeleteCityClick: (city: string) => void
};

const FavoriteCity: React.FC<Props> = ({ name, handleViewCityClick, handleDeleteCityClick }) => (
    <aside>
      <Button onClick={() => handleViewCityClick(name)} aria-label={`click to retrieve ${name}'s weather`}>
        <Typography variant='subtitle2' display="inline" noWrap aria-label="city name">
          {name}
        </Typography>
      </Button>
      <IconButton aria-label={`click to delete ${name} from favorites`} size="small" onClick={() => handleDeleteCityClick(name)}>
        <DeleteIcon aria-hidden="true" />
      </IconButton>
    </aside>
);

export default FavoriteCity;