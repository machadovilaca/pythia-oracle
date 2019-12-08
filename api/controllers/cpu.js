const CPU = module.exports;

const GenericController = require('./genericController');

CPU.index = () => {
  return GenericController.index('V$OSSTAT');
};

CPU.filtered = (unit, quantity) => {
  return GenericController.filtered(`cpu_${unit}`, quantity * 23);
};
