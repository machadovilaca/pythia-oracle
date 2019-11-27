import React from 'react';
import ReactDOM from 'react-dom';
import dotenv from 'dotenv';
import App from './app';

dotenv.config();

ReactDOM.render(
    <App/>,
  document.getElementById("root")
);
