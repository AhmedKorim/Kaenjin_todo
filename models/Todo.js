const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    }, category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    addedAtt: {
        type: Date,
        default: Date.now()
    },
    Project: {
        type: String,
        default: null
    },
    state: {
        schedule: {
            type: String,
            default: 'scheduled',
        },
        priority: {
            type: String,
            default: 3,
        },
        expectedEnd: {
            type: Date,
            default: null
        }
    },
    cleared: {
        type: Date,
        required: true
    },

})

module.exports = Todo = mongoose.model('Todo', TodoSchema);
