const Users = module.exports;

const connectOracle = require('../db');

Users.index = () => {
  return connectOracle.exec('SELECT* FROM DBA_USERS');
};
