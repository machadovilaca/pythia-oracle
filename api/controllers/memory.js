const Memory = module.exports;

const connectOracle = require('../db')

Memory.index = () => {
  return connectOracle.exec('SELECT* FROM V$SGA');
};
