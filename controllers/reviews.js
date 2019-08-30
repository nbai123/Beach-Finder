var Beach = require('../models/beach');


module.exports = {
    create,
    deleteReview,
    update,
    index
}

function create (req, res) {
    req.body.email = req.user.email;
    Beach.findById(req.params.bid, function (err, beach) {
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

function update(req, res) {
    Beach.findById(req.params.bid, function(err, beach) {
        var review = beach.reviews.id(req.params.rid)
       review.content = req.body.content;
       review.rating = req.body.rating;
       beach.save(function(err) {
           res.redirect(`/beaches/${beach._id}`)
       })
    })
};

function index(req, res) {
    Beach.findById(req.params.bid, function(err, beach) {
        var review = beach.reviews.id(req.params.rid)
        res.render(`beaches/edit`, { user: req.user, beach, review })
    })
}