import { getData } from './genericState';

export const getCurrentCpu = () => {
  return getData('cpu');
};

export const getCpuHistory = (unit = 'daily', quantity = 7) => {
  return getData('cpu', unit, quantity);
};
