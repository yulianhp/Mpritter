var express = require('express');
var router = express.Router();
const mprittsCon = require('../controllers/mpritts');


router.get('/', mprittsCon.showMpritt)
router.post('/', mprittsCon.createMpritt)
router.delete('/:id', mprittsCon.removeMpritt)

module.exports = router;
