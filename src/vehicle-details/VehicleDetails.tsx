import { Box, createStyles, makeStyles, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ListHeader } from "./ListHeader";
import { VehicleList } from "./VehicleList";
import { ArrowBack } from '@material-ui/icons';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 49px)',
      overflowY: 'scroll',
    },
    title: {
      marginLeft: '40%',
      fontWeight: 'bolder',
      fontSize: 21
    },
    tableHeight: {
      height: 550
    },
    headerTitle: {
      display: 'flex',
      height: 40,
      marginTop: 10
    },
    back: {
      fontSize: 30,
      marginLeft: 10,
      cursor: 'pointer'
    }
  })
);
const VehicleDetails: FC<any> = ({make, model}) => {
    const classes = useStyles();
    const location = useLocation();
    const vehicle = (location.state as any);
    const [vehicleList, setVehicleList] = useState([]);
    const history = useHistory();

    useEffect(() => {
      const fetchData = async () => {
    
        try {
          const data  = await axios({
              url: "http://localhost:8080/api/vehicles",
              method: "GET",
              params: {
                make: vehicle.make,
                model: vehicle.model
              }
          })
          setVehicleList(data.data);
        } catch (error) {
          alert("Something went wrong!!! Please restart the server.")
        }
      };
      fetchData()
    }, []);
    
    const redirectMainPage = () => {
      history.push('/')
    };

    return (
        <div className="container">
          <Box className={classes.headerTitle}>
              <Typography><ArrowBack className={classes.back} onClick={() => redirectMainPage()}/></Typography>
              <Typography className={classes.title}>List of cars of {vehicle.model}</Typography>
          </Box>
          <ListHeader />
          <Box className={classes.root}>
            
            <div className={classes.tableHeight}>
              {vehicleList?.map((vehicle) => <VehicleList {...vehicle} />)}
            </div>
          </Box>
        </div>
    );
}
export { VehicleDetails };
