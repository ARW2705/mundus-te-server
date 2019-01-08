'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const rp = require('request-promise');
const cors = require('cors');

const weatherRouter = express.Router();

weatherRouter.use(bodyParser.json());

weatherRouter.route('/:requestType/:latlng')
  .get(cors(), (req, res, next) => {
    rp(`https://api.darksky.net/${req.params.requestType}/${process.env.WEATHER_API_KEY}/${req.params.latlng}`)
      .then(apiRes => {
        res.setHeader('content-type', 'application/json');
        res.send(apiRes);
      })
      .catch(err => next(err));
  });

module.exports = weatherRouter;
