const employerModel = require('../../model/Employer.model');
const expressJwt = require('express-jwt');

exports.employerById = (req,res,next,id) => {
    employerModel.findById(id).exec((error,employer)=>{
        if(error||!employer){
            return res.status(400).json({
                error:"Employer not found"
            })
        }

        req.profile = employer;
        next();
    })
}

exports.requireSignInPages = expressJwt({
    secret:process.env.JWT_KEY,
    userProperty:"auth"
})

exports.isAuth = (req,res,next) => {
    let employer = req.profile && req.auth && req.profile._id == req.auth._id;

    if(!employer){
        res.status(403).json({
            error:"Access denied!"
        })
    }

    next();
}

exports.isAdmin = (req,res,next) => {
    if(req.profile.role==0){
        res.status(403).json({
            error:"Admin Resource! Access Denied"
        })
    }
}


