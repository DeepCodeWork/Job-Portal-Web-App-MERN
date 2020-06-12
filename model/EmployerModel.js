const mongoose = require('mongoose');
const Validator = require('validator');

const employerSchema = mongoose.model("Employer",{
    
    //Email object
    employerEmail:{
        type:String,
        required:true,
        toLowerCase:true,
        trim:true,
        unique:true,
        validate(value){
            if(!Validator.isEmail(value))
                throw new Error("Enter a valid Email id")
        }
    },


    //Password Object
    employerPassword:{
        type:String,
        required:true,
        trim:true,
        minlength:6,
        validate(value){
            if(value.toLowerCase().includes("password"))
                throw new Error("Password should not contain 'password'!")
        }

    },

    //Name Object
    employerName:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    }


})


module.exports = employerSchema;

