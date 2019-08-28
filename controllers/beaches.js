var Beach = require('../models/beach');

module.exports = {
    index,
    new: newBeach,
    show,
    create
}

function index(req, res) {
    Beach.find({}, function(err, beaches) {
        res.render('beaches/index', { title: 'All Beaches', beaches, user: req.user});
    });
}

function newBeach(req, res) {
    res.render('beaches/new', {title: 'New Beach', user: req.user});
}

function show(req, res) {
    Beach.findById(req.params.id, function(err, beach) {
        res.render('beaches/show', { title: 'Beach Detail', beach, user: req.user });
    });
}

function create(req, res) {
    var beach = new Beach(req.body);
    beach.save(function(err) {
        if(err) return res.render('beaches/new');
        res.redirect('/beaches');
    });
}