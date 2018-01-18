var express = require('express');
var router = express.Router();
const usersCon = require('../controllers/users');


router.post('/register', usersCon.register)
router.post('/login', usersCon.login)

module.exports = router;
