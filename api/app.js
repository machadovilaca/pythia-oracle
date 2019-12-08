require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRouter = require('./routes/index');
const tablespacesRouter = require('./routes/tablespaces');
const datafilesRouter = require('./routes/datafiles');
const usersRouter = require('./routes/users');
const memoryRouter = require('./routes/memory');
const sessionsRouter = require('./routes/sessions');
const cpuRouter = require('./routes/cpu');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', indexRouter);
app.use('/api/tablespaces', tablespacesRouter);
app.use('/api/datafiles', datafilesRouter);
app.use('/api/users', usersRouter);
app.use('/api/memory', memoryRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/cpu', cpuRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res) => {
  console.log(1);
  console.log(err);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
});

module.exports = app;
