var express = require('express');
var router = express.Router();
const mprittsCon = require('../controllers/mpritts');


router.post('/register', mprittsCon.createMpritt)

module.exports = router;
