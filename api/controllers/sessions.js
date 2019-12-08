const Sessions = module.exports;

const connectOracle = require('../db');

Sessions.index = () => {
  return connectOracle.exec('SELECT * FROM V$SESSION WHERE TYPE = USER');
};
