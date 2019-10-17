const mongoose = require('mongoose');

const PrimaryObjectSchema = new mongoose.Schema({
    name: { type: String, required: [true, "A name is required idiot"] },
}, { timestamps: true })

mongoose.model('PrimaryObject', PrimaryObjectSchema);