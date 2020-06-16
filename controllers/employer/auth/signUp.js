const employerModel = require('../../../model/Employer.model');

const employerSignUp = (req,res)=>{

    const employer = new employerModel(req.body);
    employer.save()
        .then((obj)=>{
            res.status(200).send(obj)
    })
        .catch((error)=>{
            console.log(error);
            res.status(400).send({error:errorHandler(error)})
        })
}

module.exports = employerSignUp;