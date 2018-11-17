const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    categories: [
        {
            title: {
                type: String,
                required: true
            }

        }
    ]
})

module.exports = Category = mongoose.model('Category', CategorySchema);
