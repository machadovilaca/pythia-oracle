import { getData } from './genericState';

export const getCurrentTablespaces = () => {
  return getData('tablespaces');
};

export const getTablespacesHistory = (unit = 'daily', quantity = 7) => {
  return getData('tablespaces', unit, quantity);
};
