const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/resume');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

require('../model/personal-info');
router.get('/info', (req, res) => {
  personalInfo.find(function (err, out) {
    if (err) return next(err);
    res.json({info : out});
  });

});

module.exports = router;