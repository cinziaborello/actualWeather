import React from 'react';
import { Box, Typography } from '@material-ui/core';


type Props = {
  name: string
};

const FavoriteCity: React.FC<Props> = ({ name }) => {
  return (
    <Box>
      <Typography variant='subtitle2' noWrap>
        {name}
      </Typography>
    </Box>
  );
};

export default FavoriteCity;