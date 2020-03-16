const mongoose = require('mongoose');

const Sushi = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: Array,
        default: [
            'spicy', 'vegetarian', 'sweet', 'baked'
        ]
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Sushi', Sushi);