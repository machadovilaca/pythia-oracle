const Datafiles = module.exports;

const GenericController = require('./genericController');
const isSqlInjection = require('is-sql-injection');
const dateBuilder = require('../helper/dateBuilder');

Datafiles.index = () => {
  return GenericController.index('DBA_DATA_FILES');
};

Datafiles.filtered = async (unit, quantity) => {
  if(isSqlInjection(quantity) || isSqlInjection(quantity)) {
    return { error: 'possible sql injection detected' };
  }

  const dates = dateBuilder(await GenericController.raw(
    `select distinct(query_date) "date"
     from datafiles_${unit}
     order by query_date desc
     fetch next ${quantity} row only`
  ));

  return GenericController.raw(`select * from datafiles_${unit} where query_date in ${dates}`);
};
