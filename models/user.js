const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        dropDups: true
    },
    phone: {
        type: Number
    }
    },{
        toJSON: {virtuals: true}
    })

    // virtuals

    userSchema.virtual('posts', {
        ref: 'Post',
        localField: '_id',
        foreignField: 'user'
    })




module.exports = mongoose.model('User', userSchema)