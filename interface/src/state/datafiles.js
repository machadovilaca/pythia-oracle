import { getData } from './genericState';

export const getCurrentDatafiles = () => {
  return getData('datafiles');
};

export const getDatafilesHistory = (unit = 'daily', quantity = 7) => {
  return getData('datafiles', unit, quantity);
};
