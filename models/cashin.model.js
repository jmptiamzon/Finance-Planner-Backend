const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cashinSchema = new Schema({

    category: {
        type: String,
        required: true,
        trim: true
    }, 

    amount: {
        type: Number,
        required: true,
        trim: true
    },

    datetime: {
        type: String,
        trim: true
    }, 

    comments: {
        type: String,
        trim: true
    }

}, {
    timestamps: true,
    collection: 'cashin'
});

const Cashin = mongoose.model('cashin', cashinSchema);

module.exports = Cashin;