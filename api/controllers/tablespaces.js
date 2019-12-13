const Tablespaces = module.exports;

const GenericController = require('./genericController');
const isSqlInjection = require('is-sql-injection');
const dateBuilder = require('../helper/dateBuilder');

Tablespaces.index = () => {
  return GenericController.index('DBA_TABLESPACES');
};

Tablespaces.filtered = async (unit, quantity) => {
  if(isSqlInjection(quantity) || isSqlInjection(quantity)) {
    return { error: 'possible sql injection detected' };
  }

  const dates = dateBuilder(await GenericController.raw(
    `select distinct(query_date) "date"
     from tablespaces_${unit}
     order by query_date desc
     fetch next ${quantity} row only`
  ));

  return GenericController.raw(`select * from tablespaces_${unit} where query_date in ${dates}`);
};
