const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    addedAtt: {
        type: Date,
        default: Date.now()
    },
    category: {
        type: String,
        default: 'main'
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
