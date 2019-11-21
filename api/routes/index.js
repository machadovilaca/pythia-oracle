const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.jsonp({ app: 'pythia-oracle' });
});

module.exports = router;
