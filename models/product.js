
const mongoose = require('mongoose');

const productModels = mongoose.Schema({
    title:String,
    desc:String,
    imageUrl:String,
});
module.exports = mongoose.model('products',productModels);