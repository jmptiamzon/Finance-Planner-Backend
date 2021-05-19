const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cashoutSchema = new Schema({

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
    collection: 'cashout'
});

const Cashout = mongoose.model('cashout', cashoutSchema);

module.exports = Cashout;