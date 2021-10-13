import { Box, createStyles, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CarMarkers } from './car-list/CarMarkers';
import { Header } from './header/Header';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { VehicleDetails } from './vehicle-details/VehicleDetails';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 66px)'
    },
    list: {
      height: '100%',
      background: '#FFFFFF',
      borderRadius: 15
    },
  })
);

const App: FC = () => {
  const classes = useStyles();
  const queryClient = new QueryClient();

  return (
    
    <QueryClientProvider client={queryClient}>
      <Box component="main" className={classes.root}>
        <Box className={classes.list}>
          <Header />
        </Box>
      </Box>
      <Router>
        <Route exact path="/" component={CarMarkers} />
        <Route path="/vehicle-details" component={VehicleDetails} />
      </Router>
      {/* <CarMarkers/> */}
  </QueryClientProvider>
  );
};

export default App;
