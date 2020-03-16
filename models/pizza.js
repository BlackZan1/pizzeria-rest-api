const mongoose = require('mongoose');

const Pizza = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: Array,
        default: [
            'spicy', 'vegetarian', 'sweet'
        ]
    },
    large: {
        type: Array,
        default: [
            35, 1100 // Size in cm and Weight in kg
        ]
    },
    medium: {
        type: Array,
        default: [
            30, 850
        ]
    },
    small: {
        type: Array,
        default: [
            25, 700
        ]
    }
})

module.exports = mongoose.model('Pizza', Pizza);