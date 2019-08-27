var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users')

/* GET users listing. */
router.get('/beaches', usersCtrl.index);

module.exports = router;