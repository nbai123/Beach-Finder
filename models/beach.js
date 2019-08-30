var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema ({
    content: String,
    rating: {
        type: String,
        enum: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']
    },
    email: String,
}, {
    timestamps: true
});

var beachSchema = new Schema ({
    beach: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    reviews: [reviewSchema] 
},  {
        timestamps: true
});

module.exports = mongoose.model('Beaches', beachSchema);
