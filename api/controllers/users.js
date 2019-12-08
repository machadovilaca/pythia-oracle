const Users = module.exports;

const GenericController = require('./genericController');

Users.index = () => {
  return GenericController.index('DBA_USERS');
};
