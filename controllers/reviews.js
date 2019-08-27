var Beach = require('../models/beach');

module.exports = {
    create,
    deleteReview
}

function create (req, res) {
    console.log(req.params.id)
    Beach.findById(req.params.id, function (err, beach) {
        console.log(beach)
        beach.reviews.push(req.body);
        beach.save(function (err) {
            res.redirect(`/beaches/${beach._id}`);
        })
    })
};

function deleteReview (req, res) {
    
}