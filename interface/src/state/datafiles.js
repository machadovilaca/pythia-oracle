import { getData, updateData } from './genericState';

export const getCurrentDatafiles = () => {
  return getData('datafiles');
};

export const updateCurrentDatafiles = () => {
  return updateData('datafiles');
};

export const getDatafilesHistory = (unit = 'daily', quantity = 7) => {
  return getData('datafiles', unit, quantity);
};

export const updateDatafilesHistory = (unit = 'daily', quantity = 7) => {
  return updateData('datafiles', unit, quantity);
};
