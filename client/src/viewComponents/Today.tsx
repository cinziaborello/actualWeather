import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const Today: React.FC = () => {
  const newDate:string = new Date().toDateString();
  return (
    <Box>
      <Typography>{newDate}</Typography>
    </Box>
  );
};

export default Today;