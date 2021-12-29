import axios from 'axios';
import { AIRLINE_HEADERS } from './Config';
import { GET_ALL_AIRLINES, GET_AIRLINE } from '../globals/Constants';

export const apiViewAllAirlines = async () => {
  const apiResponse = await axios
    .get(GET_ALL_AIRLINES, AIRLINE_HEADERS)
    .then(response => response)
    .catch(error => error.response);
  return apiResponse;
};

export const apiViewAirline = async (code: any) => {
  const apiResponse = await axios
    .get(GET_AIRLINE, {
      ...AIRLINE_HEADERS,
      params: { iata_code: code.toString() },
    })
    .then(response => response)
    .catch(error => error.response);
  return apiResponse;
};
