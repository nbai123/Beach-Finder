var express = require('express');
var router = express.Router();
var beachesCtrl = require('../controllers/beaches');

router.get('/', beachesCtrl.index);
router.get('/new', beachesCtrl.new);
router.get('/:id', beachesCtrl.show);
router.post('/', beachesCtrl.create)

module.exports = router;