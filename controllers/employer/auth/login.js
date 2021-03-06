const jwt = require('jsonwebtoken');

//employer model
const employerModel = require('../../../model/Employer.model');

const login = (req,res)=>{
    employerModel.findOne({employerEmail:req.body.employerEmail},(error, employer)=>{
        

        if(error||!employer){
            return res.status(400).json({
                error:"Email does not exist. Please sign up"
            })
        }

        //Authenticating the user
        if(!employer.authenticate(req.body.employerPassword)){
            return res.status(401).send({error:"Email and password do not match"})
            
        }

        //Generating the token
        const token = jwt.sign(employer.toJSON(),process.env.JWT_KEY);

        //persisting the cookie
        res.cookie("c",token,{expire:new Date()+99999});

        const user = {
            employerEmail:employer.employerEmail,
            employerName : employer.employerName,
            employerPhone:employer.employerNumber,
            employerId:employer._id
        }

        res.status(200).send({token,user});
    }).catch((error)=>{
        console.log(error)
        res.status(400).json({error:"This email does not exist. Please Signup"})
    })
}

module.exports = login;