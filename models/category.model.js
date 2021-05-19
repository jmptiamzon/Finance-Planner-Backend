const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        trim: true
    }

}, {
    timestamps: true,
    collection: 'category'
});

const Category = mongoose.model('category', CategorySchema);

module.exports = Category;