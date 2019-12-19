import { getData } from './genericState';

export const getCurrentMemory = () => {
  return getData('memory');
};

export const getMemoryHistory = (unit = 'daily', quantity = 7) => {
  return getData('memory', unit, quantity);
};
