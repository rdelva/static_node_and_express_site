const express = require('express');
const router = express.Router();
const { data } = require('../data/data.json');
const { projects }  = { data };


router.get('/', function(req, res, next) {
    res.render('index',  { projects } );
      
});

module.exports = router;