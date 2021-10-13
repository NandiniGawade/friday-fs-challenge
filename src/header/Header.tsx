import { FC } from 'react';
import { Box, createStyles, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      background: '#7E57C2',
      color: '#FED44E',
      padding: theme.spacing(2.5, 3, 2),
      justifyContent: 'center'
    },
    title: {
      fontSize: 40,
      paddingLeft: theme.spacing(1.25),
    },
  })
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.root} display="flex" flexDirection="row" alignItems="center">
      <Typography variant="h2" className={classes.title}>
        Friday Insurance
      </Typography>
    </Box>
  );
};

export { Header };
