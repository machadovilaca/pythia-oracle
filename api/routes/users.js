const express = require('express');
const router = express.Router();
const Users = require('../controllers/users');

router.get('/', (req, res) => {
  Users.index()
    .then(data => res.jsonp(data))
    .catch(err => res.status(400).jsonp(err));
});

module.exports = router;
