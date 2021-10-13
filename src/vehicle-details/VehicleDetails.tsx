import { Box, createStyles, makeStyles, TextField, Typography } from "@material-ui/core";
import { Autocomplete} from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getCarModels } from "../car-list/CarMarkersHook";
import { ListHeader } from "./ListHeader";
import { VehicleList } from "./VehicleList";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: 'calc(100% - 49px)',
      overflowY: 'scroll',
    },
    title: {
      fontSize: 20,
      paddingLeft: theme.spacing(1.15),
    },
    tableHeight: {
      height: 550
    }
  })
);
const VehicleDetails: FC<any> = ({make, model}) => {
    const classes = useStyles();
    const location = useLocation();
    const vehicle = (location.state as any);
    const [vehicleList, setVehicleList] = useState([]);

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
          console.log("true");
        }
      };
      fetchData()
    }, []);
    return (
        <div className="container">
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
