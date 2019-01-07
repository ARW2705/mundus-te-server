'use strict';

const express = require('express');
const rp = require('request-promise');

const weatherRouter = express.Router();

weatherRouter.route('/:requestType/:latlng')
  .get((req, res, next) => {
    rp(`https://api.darksky.net/${req.params.requestType}/${process.env.WEATHER_API_KEY}/${req.params.latlng}`)
      .then(apiRes => {
        res.send(apiRes);
      })
      .catch(err => next(err));
  });

module.exports = weatherRouter;
