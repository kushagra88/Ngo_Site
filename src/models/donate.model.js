const mongoose = require('mongoose')

const donateSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String,
        required: true
    },

    donation: {
        type: String,
        required: true
    },

    amount: {
        type: String
    }

},{timestamps:true})

module.exports = mongoose.model('Donate', donateSchema);