var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var reviewSchema = new Schema ({
    content: String,
    Rating: {
        type: String,
        enum: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star']
    }
}, {
    timestamps: true
});

var beachSchema = new Schema ({
    Beach: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    },
    reviews: [reviewSchema] 
},  {
        timestamps: true
});

module.exports = mongoose.model('Beaches', beachSchema);