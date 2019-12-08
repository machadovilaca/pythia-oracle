const Sessions = module.exports;

const GenericController = require('./genericController');

Sessions.index = () => {
  return GenericController.index('V$SESSION');
};
