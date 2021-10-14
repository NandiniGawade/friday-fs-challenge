import axios from 'axios';
import { Carname } from '../shared/types';

export type MarkersResponse = Carname[];
export type response ='';

export const MARKERS_ENDPOINT = `http://localhost:8080/api/makes`;
export const MODELS_ENDPOINT = `http://localhost:8080/api/models`;
export const MODELS_DETAILSENDPOINT = `http://localhost:8080/api/vehicles`;

export const getCarMakers = async (): Promise<any> => {
  const { data } = await axios.get(MARKERS_ENDPOINT);
  return data;
};

export const getCarModels = async (model: any): Promise<MarkersResponse> => {
  const { data } = await axios.get(MODELS_ENDPOINT, {
    params: {
      make: model
    }
  });
  return data;
};

export const getCarModelDetails = async (maker: string, model: string): Promise<MarkersResponse> => {
  const { data } = await axios.get(MODELS_DETAILSENDPOINT, {
    params: {
      make: maker,
      model
    }
  });
  return data;
};

export const fetchData = async (model: any) => {
  try {
    const data  = await axios({
        url: "http://localhost:8080/api/models",
        method: "GET",
        params: {
            make: model
        }
    })
    return data;
  } catch (error) {
    alert("Something went wrong!!! Please restart the server.");
  }
};