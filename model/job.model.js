const mongoose = require('mongoose');
const Validator = require('validator');

const jobModel = mongoose.model('job',new mongoose.Schema({
    employerId: {
        type:mongoose.Schema.Types.ObjectId,
        trim:true,
        required:true
    },

    name:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },

    website:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },

    location:{
        type:String,
        minlength:3,
        lowercase:true,
        trim:true,
        required:true
    },

    description:{
        type:String,
        minlength:20,
        trim:true,
        required:true
    },

    category:{
        type:String,
        trim:true,
        required:true
    },

    isApproved:{
        type:Boolean,
        default:false
    }
}))


module.exports = jobModel;