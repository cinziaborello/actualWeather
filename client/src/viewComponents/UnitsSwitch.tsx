import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Typography, Switch } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    unitsSwitch: {
      padding: theme.spacing(0, 1),
      marginLeft: theme.spacing(3),
      color: theme.palette.common.white
    }
  })
);

type Props = {
  units: boolean,
  handleDegreesChange: ()  => void
}

const UnitsSwitch: React.FC<Props> = ({ units, handleDegreesChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.unitsSwitch} role="switch" aria-label= "Switch between Fahrenheit and Celsius">
      <Typography variant="h6" display="inline" noWrap aria-label= "Fahrenheit">
        <abbr title="Fahrenheit">F</abbr>
      </Typography>
      <Switch
        checked={units}
        onChange={handleDegreesChange}
        name="degrees"
        color="default"
        size="small"
        aria-label= "Switch between Fahrenheit and Celsius"
      />
      <Typography variant="h6" display="inline" noWrap aria-label= "Celsius">
        <abbr title="Celsius">C</abbr>
      </Typography>
    </div>
  );
}

export default UnitsSwitch;