import { getData, updateData } from './genericState';

export const getCurrentTablespaces = () => {
  return getData('tablespaces');
};

export const updateCurrentTablespaces = () => {
  return updateData('tablespaces');
};

export const getTablespacesHistory = (unit = 'daily', quantity = 7) => {
  return getData('tablespaces', unit, quantity);
};

export const updateTablespacesHistory = (unit = 'daily', quantity = 7) => {
  return updateData('tablespaces', unit, quantity);
};
