const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    //Email object
    email:{
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
    password:{
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
    name:{
        type:String,
        required:true,
        trim:true,
        minlength:6
    },

    //Phone number
    number:{
        type:String,
        required:"Enter the number",
        trim:true,
        minlength:10,
        maxlength:10
    },
    
    role:{
        type:Number,
        default:0
    },

    salt:{
        type:String,

    }
},{timestamps:true})

const employeeModel = mongoose.model('employee',employeeSchema);

module.exports = employeeModel;