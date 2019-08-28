var Beach = require('../models/beach');

module.exports = {
    create,
    deleteReview,
    // update
}

function create (req, res) {
    Beach.findById(req.params.bid, function (err, beach) {
        req.body.userID = req.user.id;
        console.log(req.body.userID);
        beach.reviews.push(req.body);
        beach.save(function (err) {
            res.redirect(`/beaches/${beach._id}`);
        })
    })
};

function deleteReview (req, res) {
    Beach.findById(req.params.bid, function(err, beach) {
        var review = beach.reviews.id(req.params.rid)
        review.remove();
            beach.save(function(err) {
                res.redirect(`/beaches/${beach._id}`);
            })
        })
};

// function update (req, res) {

// }