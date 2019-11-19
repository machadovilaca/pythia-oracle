const express = require('express');
const router = express.Router();
const Datafiles = require('../controllers/datafiles');

router.get('/', (req, res) => {
  Datafiles.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
