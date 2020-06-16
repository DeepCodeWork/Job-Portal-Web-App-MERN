const mongoose = require('mongoose');
const Validator = require('validator');

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    }

},{timestamps:true})

exports.categoryModel = mongoose.model('category',categorySchema);