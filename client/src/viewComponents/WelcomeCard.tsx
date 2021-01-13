import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CustomCard from '../uiComponents/CustomCard';


const StyledCard = withStyles({
  root: {
    background: '#ff9100'
  }
})(CustomCard);

const WelcomeCard: React.FC = () => (
  <article>
    <StyledCard aria-label="welcome message">
      <Typography variant='h6' noWrap>
        Welcome to Actual Weather!
      </Typography>
      <Typography variant='subtitle2' noWrap>
        To begin, search for a city by name.
      </Typography>
    </StyledCard>
  </article>
);

export default WelcomeCard;