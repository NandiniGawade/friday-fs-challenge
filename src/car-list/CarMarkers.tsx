import { FC, useEffect, useState } from 'react';
import { createStyles, makeStyles, TextField, Typography } from '@material-ui/core';
import { Autocomplete } from '@mui/material';
import { CarModels } from '../car-models/CarModels';
import axios from 'axios';
import { fetchData} from './CarMarkersHook';

const useStyles = makeStyles((theme) =>
  createStyles({
    listItem: {
      borderBottom: '1px solid #F1F1F1',
      padding: theme.spacing(2, 1.5),
    },
    panel: {
      borderRadius: '5px',
      boxShadow: '0 5px 20px $shadow-dark',
      height: '400px',
      left: 0,
      margin: '0 auto 150px',
      overflow: 'hidden',
      paddingTop: '30px',
      position: 'relative',
      right: 0,
      top: '50px',
      width: '60%',
      zIndex: 200,
      backgroundColor: 'white'
    },
    title: {
      fontSize: 30
    },
    panelContent: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '3%'
    }
  })
);
export const MARKERS_ENDPOINT = `http://localhost:8080/api/makes`;
const CarMarkers: FC<{}> = () => {
  const classes = useStyles();
  const [carsMaker, setcarsMaker] = useState([]);
  const [maker, setcarMaker] = useState('');

  let modelList: any;

  useEffect(() => {
    const fetchData = async () => {
  
      try {
        const response = await axios(MARKERS_ENDPOINT);
        setcarsMaker(response.data)
      } catch (error) {
        alert("Something went wrong!!! Please restart the server.")
      }
    };
    fetchData()
  }, []);
  
  const [displayCarModels, setDisplayCarModels] = useState(false);
  const [selectedCarModel, setselectedCarModel] = useState('');
  
  

  const handleOnChange = (event: any, value: any) => {    
    if(value) {
      setcarMaker(value);
      const data = fetchData(value);
      data.then(response => {
        modelList = response?.data;
        if(modelList?.length === 0) {
          alert("No Records Founds");
        } else {
          setDisplayCarModels(true);
          setselectedCarModel(modelList)
        }
      });
      data.catch(error => {
        alert(error)
      })
    }
  };

  return (
      <>
        <div className={classes.panel}>
          <Typography className={classes.title}>Car Selection</Typography>
          <div>
            <Autocomplete
              id="combo-box-demo"
              className={classes.panelContent}
              options={carsMaker}
              sx={{ width: 400 }}
              onChange={handleOnChange}
              renderInput={(params) => <TextField {...params} label="Car Maker" />}/>
          </div>
          { displayCarModels && 
            <div>
              <CarModels model={selectedCarModel} maker={maker}/>
            </div>
          }
        </div>
      </>
  );
};

export { CarMarkers };
