const Datafiles = module.exports;

const connectOracle = require('../db');

Datafiles.index = () => {
  return connectOracle.exec('SELECT * FROM DBA_DATA_FILES');
};
