'use strict';

var express = require('express');
const cors = require('cors');
var router = express.Router();

/* GET home page. */
router.get('/', cors(), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
