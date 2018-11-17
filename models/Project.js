const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "Category"
        }
    ],
    stages: [
        {
            title: {
                type: String,
                required: true,
            },
            from: {
                type: Date,
                default: Date.now()
            },
            to: {
                type: Date,
                required: true
            }

        }
    ],

})

module.exports = mongoose.model('Project', ProjectSchema);
