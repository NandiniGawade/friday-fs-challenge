import { createStyles, Grid, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
      background: 'white'
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
    },
    status: {
      width: '101px',
      height: '19px',
      borderRadius: 4,
      fontSize: 11,
      lineHeight: '15px',
      fontWeight: theme.typography.fontWeightBold,
      color: '#FFFFFF',
      backgroundColor: '#5B994C',
    },
  })
);

export type Vehicle = {
    make: string,
    model: string,
    enginePowerPS: number,
    enginePowerKW: number,
    fuelType: string,
    bodyType: string,
    engineCapacity: number
};

const VehicleList: FC<Vehicle> = ({ make, model, enginePowerPS, enginePowerKW, fuelType,
    bodyType, engineCapacity}) => {
    const classes = useStyles();
  
  
    return (
      <Grid container className={classes.root}>
        <Grid item xs={1}>
          <Typography className={classes.text}>{make}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.text}>{model}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.text}>{enginePowerPS}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.text}>{enginePowerKW}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.text}>{fuelType}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography className={classes.text}>{bodyType}</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography className={classes.text}>{engineCapacity}</Typography>
        </Grid>
      </Grid>
    );
  };
  
  export { VehicleList };