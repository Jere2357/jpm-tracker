import React from 'react';

const rapidApiKey = '960a710699msh72dad673d1d91b3p1dd29cjsn117a9a34d859';

const hosts = {
  AIRLINE_URL: 'https://iata-and-icao-codes.p.rapidapi.com',
  COVID_STAT_URL: 'https://covid-19-statistics.p.rapidapi.com',
};

export const AIRLINE_API_URL = hosts.AIRLINE_URL; // Airline host url value

export const COVID_API_URL = hosts.COVID_STAT_URL; // Covid host url value

export const AIRLINE_HEADERS = {
  headers: {
    'x-rapidapi-host': 'iata-and-icao-codes.p.rapidapi.com',
    'x-rapidapi-key': rapidApiKey,
  },
};

export const COVID_HEADERS = {
  headers: {
    'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com',
    'x-rapidapi-key': rapidApiKey,
  },
};
