var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var beachSchema = new Schema ({
    Beach: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }, 
},  {
        timestamps: true
});

module.exports = mongoose.model('Beaches', beachSchema);