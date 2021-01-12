import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomCard from '../uiComponents/CustomCard';


const WelcomeCard: React.FC = () => (
    <CustomCard>
      <Typography variant='h6' noWrap>
        Welcome to Actual Weather!
      </Typography>
      <Typography variant='subtitle2' noWrap>
        To begin, search for a city by name.
      </Typography>
    </CustomCard>
);

export default WelcomeCard;