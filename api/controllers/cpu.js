const CPU = module.exports;

const connectOracle = require('../db');

CPU.index = () => {
  return connectOracle.exec('SELECT * FROM V$OSSTAT');
};
