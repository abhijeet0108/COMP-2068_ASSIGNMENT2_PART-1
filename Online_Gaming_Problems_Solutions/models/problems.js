const mongoose = require('mongoose');
//Create problems Schema
const ProblemsSchema = new mongoose.Schema({
    requesterName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    mobile: {
        type: int,
        required: true
    }

});

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
module.exports = mongoose.model('Problems', ProblemsSchema);