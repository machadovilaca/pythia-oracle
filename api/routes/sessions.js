const express = require('express');
const router = express.Router();
const Sessions = require('../controllers/sessions');

router.get('/', (req, res) => {
  Sessions.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
