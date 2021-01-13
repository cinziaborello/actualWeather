import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import PlaceIcon from '@material-ui/icons/Place';
import ErrorIcon from '@material-ui/icons/Error';
import ErrorCard from '../uiComponents/ErrorCard';
import CustomCard from '../uiComponents/CustomCard';
import { AirdataJson } from '../jsonTypes/airdataJson';


const StyledPaper = withStyles({
  root: {
    margin: '.9rem auto',
    padding: '.5rem',
    width: '80%'
  }
})(Paper);

type Props = {
  airData: AirdataJson|null,
  error: boolean
};

const CurrentAirQuality: React.FC<Props> = ({ airData, error }) => {
  let currentAir: JSX.Element|null;
  if (error) {
    currentAir = (
      <ErrorCard>
        <ErrorIcon aria-label="error" />
        No air quality data.
      </ErrorCard>
    );
  } else if (airData) {
    const aqiCodesMeanings: string[] = ['', 'Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
    const aqiCodesColors: string[] = ['', 'green', 'yellow', 'orange', 'red', 'purple'];
    const aqiDescription: string = aqiCodesMeanings[airData.list[0].main.aqi];
    const aqiColor: string = aqiCodesColors[airData.list[0].main.aqi];

    currentAir = (
      <CustomCard>
        <Typography display="inline" noWrap>
          <PlaceIcon fontSize="small" aria-label="city icon" /> Air Quality
        </Typography>
        <StyledPaper>
          <Typography variant='h4' noWrap>
            {aqiDescription}
          </Typography>
          <InfoIcon style={{ color: aqiColor, fontSize: 80, margin: '.5rem' }} />
          <Typography variant='subtitle1' noWrap>
            PM2.5 fine particulates matter: {airData.list[0].components.pm2_5}
          </Typography>
          <Typography variant='subtitle1' noWrap>
            PM10 coarse particulates matter,: {airData.list[0].components.pm10}
          </Typography>
          <Typography variant='subtitle2' noWrap>
            Carbon monoxide: {airData.list[0].components.co}
          </Typography>
          <Typography variant='subtitle2' noWrap>
            Ozone: {airData.list[0].components.o3}
          </Typography>
        </StyledPaper>
      </CustomCard>
    );
  } else {
    currentAir = null;
  }

  return (
    <Box>
      {currentAir}
    </Box>
  );
};

export default CurrentAirQuality;