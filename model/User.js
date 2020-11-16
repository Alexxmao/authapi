const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true,
        min: 1,
        max: 20
    },
    email : {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);