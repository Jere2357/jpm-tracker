import axios from 'axios';
import { COVID_HEADERS } from './Config';
import {
  GET_REGIONS,
  GET_PROVINCES,
  GET_TOTAL_REPORTS,
} from '../globals/Constants';

export const apiViewRegions = async () => {
  const apiResponse = await axios
    .get(GET_REGIONS, COVID_HEADERS)
    .then(response => response)
    .catch(error => error.response);
  return apiResponse;
};

export const apiViewProvinces = async (code: any) => {
  const apiResponse = await axios
    .get(GET_PROVINCES, {
      ...COVID_HEADERS,
      params: { iso: code.toString() },
    })
    .then(response => response)
    .catch(error => error.response);
  return apiResponse;
};

export const apiViewReports = async (code: any) => {
  const apiResponse = await axios
    .get(GET_TOTAL_REPORTS, {
      ...COVID_HEADERS,
      params: { region_province: code.toString() },
    })
    .then(response => response)
    .catch(error => error.response);
  return apiResponse;
};
