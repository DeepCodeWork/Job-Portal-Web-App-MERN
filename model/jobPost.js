const mongoose = require('mongoose');
const Validator = require('validator');

const jobModel = mongoose.model('job',new mongoose.Schema({
    employerId: {
        type:mongoose.Schema.Types.ObjectId,
    },

    website:{
        type:String,
        validate(value){
            if(!Validator.isUrl(value))
                throw new Error("Enter a valid URL");
        }
    },

    location:{
        type:String,
        minlength:3
    },

    description:{
        type:String,
        minlength:20
    },

    isApproved:{
        type:Boolean,
        default:false
    }
}))


module.exports = jobModel;