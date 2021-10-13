import { FC } from 'react';
import { createStyles, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid black',
      padding: theme.spacing(2, 1.5),
      background: 'white'
    },
    text: {
      fontSize: 12,
      lineHeight: '16px',
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
);

const ListHeader: FC = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={1}>
        <Typography className={classes.text}>Make</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>Model</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>Engine Power PS</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>Engine Power KW</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>Fuel Type</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography className={classes.text}>Body Type</Typography>
      </Grid>
      <Grid item xs={1}>
        <Typography className={classes.text}>Engine Capacity</Typography>
      </Grid>
    </Grid>
  );
};

export { ListHeader };
