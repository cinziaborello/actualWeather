import React from 'react';
import Typography from '@material-ui/core/Typography';


const Today: React.FC = () => {
  const newDate: string = new Date().toLocaleDateString('en-US', {
    day:   'numeric',
    month: 'short',
    year:  'numeric'
  });

  return (
    <time>
      <Typography variant='h6' noWrap>{newDate}</Typography>
    </time>
  );
};

export default Today;