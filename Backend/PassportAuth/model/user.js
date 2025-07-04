const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    password: String,
    fbID: String,
    fbAccessToken: String,
    googleID: String,
    googleAccessToken: String

});

module.exports = mongoose.model('User', userSchema);