import { AIRLINE_API_URL, COVID_API_URL } from '../requests/Config';

// Airline API
export const GET_ALL_AIRLINES = `${AIRLINE_API_URL}/airlines`;
export const GET_AIRLINE = `${AIRLINE_API_URL}/airline`;

// Covid API
export const GET_REGIONS = `${COVID_API_URL}/regions`;
export const GET_PROVINCES = `${COVID_API_URL}/provinces`;
export const GET_TOTAL_REPORTS = `${COVID_API_URL}/reports`;
