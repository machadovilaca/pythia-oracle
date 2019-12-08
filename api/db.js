const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

const DB = module.exports;

const config = {
  connectString: process.env.DB_CONNECT_STRING,
  password: process.env.DB_PASSWORD,
  poolIncrement: process.env.DB_POOL_INCREMENT,
  poolMax: process.env.DB_POOL_MAX,
  poolMin: process.env.DB_POOL_MIN,
  user: process.env.DB_USER
};

DB.exec = async query => {
  console.log(config);
  const connection = await oracledb.getConnection(config);

  return connection.execute(query);
};
