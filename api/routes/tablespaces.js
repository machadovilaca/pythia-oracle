const express = require('express');
const router = express.Router();
const Tablespaces = require('../controllers/tablespaces');

router.get('/', (req, res) => {
  Tablespaces.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
