const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    categories: [
        {
            type: String,
            required: true
        }
    ]
})

module.exports = mongoose.model('Category', CategorySchema);
