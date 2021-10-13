import { createStyles, makeStyles, TextField } from "@material-ui/core";
import { Autocomplete} from "@mui/material";
import axios from "axios";
import { FC, useEffect, useState } from "react";
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

const CarModels: FC<any> = ({model}) => {
    const classes = useStyles();
    const history = useHistory();
    const [carModels, setcarModels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data  = await axios({
                url: "http://localhost:8080/api/models",
                method: "GET",
                params: {
                    make: model
                }
            })
            setcarModels(data.data)
          } catch (error) {
            alert("Something went wrong!!! Please restart the server.")
          }
        };
        fetchData()
      }, []);
    

    const handleOnChange = (event: any, value: any) => {
        history.push({
          pathname: '/vehicle-details',
          state: {
            make: model,
            model: value
          }
        })
    };

    return (
        <div className="container">
            <Autocomplete
            id="combo-box-demo"
            className={classes.panelContent}
            options={carModels}
            sx={{ width: 400 }}
            onChange={handleOnChange}
            renderInput={(params) => <TextField {...params} label="Car Model" />}/>
        </div>
    );
}
export { CarModels };
