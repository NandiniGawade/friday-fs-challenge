import axios from 'axios';
import { Carname } from '../shared/types';

export type MarkersResponse = Carname[];
export type response ='';

export const MARKERS_ENDPOINT = `http://localhost:8080/api/makes`;
export const MODELS_ENDPOINT = `http://localhost:8080/api/models`;

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
  console.log(data)
  return data;
};