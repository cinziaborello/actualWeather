import React from 'react';
import { Box, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

type Props = {
  name: string,
  handleViewCityClick: (name: string)  => void
};

const FavoriteCity: React.FC<Props> = ({ name, handleViewCityClick }) => {
  return (
    <Box>
      <Typography variant='subtitle2' display="inline" noWrap onClick={() => handleViewCityClick(name)}>
        {name}
      </Typography>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};

export default FavoriteCity;