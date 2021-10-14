import { Box, createStyles, makeStyles, Typography } from "@material-ui/core";
import { FC, Key, ReactNode} from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ListHeader } from "./ListHeader";
import { Vehicle, VehicleList } from "./VehicleList";
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
    const vehicles = (location.state as any);
    const history = useHistory();
    
    const redirectMainPage = () => {
      history.push('/')
    };

    return (
      <>  {
        vehicles.list?.length > 0 && <div className="container">
          <Box className={classes.headerTitle}>
              <Typography><ArrowBack className={classes.back} onClick={() => redirectMainPage()}/></Typography>
              <Typography className={classes.title}>List of cars of {vehicles.model}</Typography>
          </Box>
          <ListHeader />
          <Box className={classes.root}>
            
            <div className={classes.tableHeight}>
              {vehicles.list?.map((vehicle: JSX.IntrinsicAttributes & Vehicle & { children?: ReactNode; }, index: Key | null | undefined) => <VehicleList  key= {index} {...vehicle} />)}
            </div>
          </Box>
        </div>
        }
        </>
    );
}
export { VehicleDetails };
