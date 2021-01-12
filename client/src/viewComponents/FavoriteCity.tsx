import React from 'react';
import { Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


type Props = {
  name: string,
  handleViewCityClick: (city: string)  => void,
  handleDeleteCityClick: (city: string) => void
};

const FavoriteCity: React.FC<Props> = ({ name, handleViewCityClick, handleDeleteCityClick }) => (
    <Box>
      <Typography variant='subtitle2' display="inline" noWrap onClick={() => handleViewCityClick(name)}>
        {name}
      </Typography>
      <IconButton aria-label="delete city" size="small" onClick={() => handleDeleteCityClick(name)}>
        <DeleteIcon aria-label="delete icon" />
      </IconButton>
    </Box>
);

export default FavoriteCity;