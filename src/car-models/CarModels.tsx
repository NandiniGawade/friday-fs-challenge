import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete} from "@mui/material";
import axios from "axios";
import { FC } from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
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
export const MODELS_ENDPOINT = `http://localhost:8080/api/models`;

const CarModels: FC<any> = ({model, maker}) => {
    
    const classes = useStyles();
    const history = useHistory();
    let detailsList: any
    const handleOnChange = async (event: any, value: any) => {
        if(value) {
          try {
            const data  = await axios({
                url: "http://localhost:8080/api/vehicles",
                method: "GET",
                params: {
                  make: maker,
                  model: value
                }
            })
            detailsList = data.data;
            if(detailsList.length === 0) {
              alert('No Records found');
            } else {
              history.push({
                pathname: '/vehicle-details',
                state: {
                  list: detailsList,
                  model: value
                }
              })
            }
          } catch (error) {
            alert("Something went wrong!!! Please restart the server.")
          }
        }
    };

    return (
        <>
            {model?.length > 0 && <Autocomplete
            id="combo-box-demo"
            className={classes.panelContent}
            options={model}
            sx={{ width: 400 }}
            onChange={handleOnChange}
            renderInput={(params) => <TextField {...params} label="Car Model" />}/>}
        </>
    );
}
export { CarModels };
