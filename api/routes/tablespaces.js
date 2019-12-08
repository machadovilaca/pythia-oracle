const express = require('express');
const router = express.Router();
const Tablespaces = require('../controllers/tablespaces');

function index(req, res) {
  return Tablespaces.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
}

function filtered(req, res) {
  return Tablespaces.filtered(req.query['unit'], req.query['quantity'])
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
}

router.get('/', (req, res) => {
  if (req.query['unit'] === undefined && req.query['quantity'] === undefined) {
    return index(req, res);
  } else {
    return filtered(req, res);
  }
});

module.exports = router;
