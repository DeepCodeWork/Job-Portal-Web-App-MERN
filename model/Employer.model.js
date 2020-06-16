const mongoose = require('mongoose');
const Validator = require('validator');
const crypto = require('crypto');
const uuid = require('uuid');


const employerSchema = new mongoose.Schema({
    
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
    },

    //Phone number
    employerNumber:{
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

},{timstamps:true})

//Virtual methods
employerSchema.virtual('password')
    .set(function(password){
        console.log("check")
        this._password = password
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function(){
        return this._password;
    })

employerSchema.methods = {
    
    authenticate:function(plainText){
        return plainText === this.employerPassword
        },

    encryptPassword: function(password){
            if(!password) return '';
            try{
                return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
            }catch(error){
                return "";
            }
        }

        
    }




const employerModel = mongoose.model('employer',employerSchema);
module.exports = employerModel;

