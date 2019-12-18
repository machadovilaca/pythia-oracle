import { getData } from './genericState';

export const getCurrentUsers = () => {
  return getData('users');
};

export const getUsersHistory = (unit = 'daily', quantity = 7) => {
  return getData('users', unit, quantity);
};
