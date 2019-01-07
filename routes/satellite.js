'use strict';

const express = require('express');
const rp = require('request-promise');
const cors = require('cors');

const satelliteRouter = express.Router();

satelliteRouter.route('/*')
  .get(cors(), (req, res, next) => {
    rp(`https://www.n2yo.com/rest/v1/satellite/${req.url}&apiKey=${process.env.SATELLITE_API_KEY}`)
      .then(apiRes => {
        res.send(apiRes);
      })
      .catch(err => next(err));
  });
