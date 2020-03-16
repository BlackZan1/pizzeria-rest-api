const mongoose = require('mongoose');

const Drink = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    forAdult: {
        type: Boolean,
        default: false
    },
    ml: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Drink', Drink)