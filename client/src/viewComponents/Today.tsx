import React from 'react';
import { Box, Typography } from '@material-ui/core';


const Today: React.FC = () => {
  const newDate: string = new Date().toLocaleDateString('en-US', {
    day:   'numeric',
    month: 'short',
    year:  'numeric'
  });

  return (
    <Box>
      <Typography variant='h6' noWrap>{newDate}</Typography>
    </Box>
  );
};

export default Today;