const mongoose = require('mongoose');

const PrimaryObjectSchema = new mongoose.Schema({
    name: { type: String, minlength: [4, 'Not enough Characters'], 
    required: [true, "A name is required idiot"] },
    qty: { type: Number, min: [0,"must be greater then or equal to zero"], minlength: [1, 'Not enough Characters'], 
    required: [true, "A qty is required idiot"] },
    price: { type: Number, min: [0,"must be greater then or equal to zero"], minlength: [1, 'Not enough Characters'], 
    required: [true, "A price is required idiot"] },
}, { timestamps: true })

mongoose.model('PrimaryObject', PrimaryObjectSchema);