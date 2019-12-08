const Tablespaces = module.exports;

const connectOracle = require('../db');

Tablespaces.index = () => {
  return connectOracle.exec('SELECT * FROM DBA_TABLESPACES');
};
