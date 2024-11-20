const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true,
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg']
        }]
    },
    region: {
        type: [{
            type: String,
            enum: ['south-indian', 'north-indian', 'chinese', 'bakery'] // for multiple values we take enum
        }]
    },
    offer: {
        type: String,
    },
    image: {
        type: String
    },
    //here we are creating relation
    vendor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }],// here we creating firm relation with vendor 
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Firm = mongoose.model('Firm', firmSchema);

module.exports = Firm