import { getData, updateData } from './genericState';

export const getCurrentSessions = () => {
  return getData('sessions');
};

export const updateCurrentSessions = () => {
  return updateData('sessions');
};

export const getSessionsHistory = (unit = 'daily', quantity = 7) => {
  return getData('sessions', unit, quantity);
};

export const updateSessionsHistory = (unit = 'daily', quantity = 7) => {
  return updateData('sessions', unit, quantity);
};
