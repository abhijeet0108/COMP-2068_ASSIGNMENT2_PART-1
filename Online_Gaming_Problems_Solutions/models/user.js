const mongoose = require('mongoose');
//Create user Schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
});
//Create and instantiate model with schema
const Users = mongoose.model("User", UserSchema);
module.exports = Users;