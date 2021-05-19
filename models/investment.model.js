const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvestmentSchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: trim
    }, 

    amount: {
        type: Number,
        required: true,
        trim: true
    }
    
}, {
    timestamps: true,
    collection: 'investment'
});

const Investment = mongoose.model('investment', InvestmentSchema);

module.exports = Investment;