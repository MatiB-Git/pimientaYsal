var express = require('express');
var router = express.Router();

const {detail} = require('../controllers/detailController')
/* GET users listing. */
router.get('/plato/:id', detail);

module.exports = router;
