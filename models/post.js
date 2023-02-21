const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    timeframe: {
        type: Number
    },
    location: {
        type: String
    },
    jobType: {
        type: String,
        required: true
    },
    budget: {
        type: Number
    },
    postOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    }

})


module.exports = mongoose.model('Post', postSchema)