var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.post('/beaches/:bid/reviews', reviewsCtrl.create);
router.delete('/beaches/:bid/reviews/:rid', reviewsCtrl.deleteReview);
router.put('/beaches/:bid/reviews/edit/:rid', reviewsCtrl.update);
router.get('/beaches/:bid/edit/:rid', reviewsCtrl.index);

module.exports = router;