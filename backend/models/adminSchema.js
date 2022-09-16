const mongoose = require('mongoose');

const adminschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },


})
const Admin = mongoose.model('Admin', adminschema)
module.exports = Admin;