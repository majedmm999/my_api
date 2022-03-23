const mongoose = require('mongoose');

const categorytModels = mongoose.Schema({
    text:String,
    desc:String,
    imageUrl:String,
});
module.exports = mongoose.model('category',categorytModels);