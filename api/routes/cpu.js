const express = require('express');
const router = express.Router();
const CPU = require('../controllers/cpu');

router.get('/', (req, res) => {
  CPU.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
