import { getData, updateData } from './genericState';

export const getCurrentMemory = () => {
  return getData('memory');
};

export const updateCurrentMemory = () => {
  return updateData('memory');
};

export const getMemoryHistory = (unit = 'daily', quantity = 7) => {
  return getData('memory', unit, quantity);
};

export const updateMemoryHistory = (unit = 'daily', quantity = 7) => {
  return updateData('memory', unit, quantity);
};
