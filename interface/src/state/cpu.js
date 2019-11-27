import { getData, updateData } from './genericState';

export const getCurrentCpu = () => {
  return getData('cpu');
};

export const updateCurrentCpu = () => {
  return updateData('cpu');
};

export const getCpuHistory = (unit = 'daily', quantity = 7) => {
  return getData('cpu', unit, quantity);
};

export const updateCpuHistory = (unit = 'daily', quantity = 7) => {
  return updateData('cpu', unit, quantity);
};
