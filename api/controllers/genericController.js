const GenericController = module.exports;

const isSqlInjection = require('is-sql-injection');
const connectOracle = require('../db');

GenericController.index = (table) => {
  if(isSqlInjection(table)) {
    return { error: 'possible sql injection detected' };
  }

  return connectOracle.exec(`SELECT * FROM ${table}`);
};

GenericController.filtered = (table, quantity) => {
  if(isSqlInjection(table) || isSqlInjection(quantity)) {
    return { error: 'possible sql injection detected' };
  }

  return connectOracle.exec(`SELECT * FROM ${table} FETCH FIRST ${quantity} ROWS ONLY`);
};

GenericController.raw = (query) => {
  return connectOracle.exec(query);
};

