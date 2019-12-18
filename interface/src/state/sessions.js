import { getData } from './genericState';

export const getCurrentSessions = () => {
  return getData('sessions');
};

export const getSessionsHistory = (unit = 'daily', quantity = 7) => {
  return getData('sessions', unit, quantity);
};
