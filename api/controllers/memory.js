const Memory = module.exports;

const GenericController = require('./genericController');

Memory.index = () => {
  return GenericController.index('memory_state');
};

Memory.filtered = (unit, quantity) => {
  return GenericController.filtered(`memory_${unit}`, quantity);
};
