const express = require('express');
const router = express.Router();
const Memory = require('../controllers/memory');

router.get('/', (req, res) => {
  Memory.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
