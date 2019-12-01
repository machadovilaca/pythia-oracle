import { getData, updateData } from './genericState';

export const getCurrentUsers = () => {
  return getData('users');
};

export const updateCurrentUsers = () => {
  return updateData('users');
};

export const getUsersHistory = (unit = 'daily', quantity = 7) => {
  return getData('users', unit, quantity);
};

export const updateUsersHistory = (unit = 'daily', quantity = 7) => {
  return updateData('users', unit, quantity);
};
