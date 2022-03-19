
const mongoose = require('mongoose');

const productModels = mongoose.Schema({
    title:String,
    desc:String,
    color:String,
    
});
module.exports = mongoose.model('products',productModels);