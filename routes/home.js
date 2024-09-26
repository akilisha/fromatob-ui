const express = require('express');
const router = express.Router();

const apiKey = process.env.MAPBOX_PUB_KEY;

router.get('/', function(req, res, next) {
  res.render('index', { title: `Express - ${apiKey}` });
});

module.exports = router;
