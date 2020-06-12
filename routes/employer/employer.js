const express = require('express');
const router = express.Router();

//employer model
const employerModel = require('../../model/EmployerModel');
const jobModel = require('../../model/jobPost');

//Adding a new Employer to the database
router.post('/add',(req,res)=>{
    
    const employer = new employerModel(req.body);

    employer.save().
        then((obj)=>{
            res.status(200).send(employer)
    })
        .catch((error)=>{
            res.status(400).send(error)
        })

});


//Fetching an employer
router.post('/get', (req,res)=>{

    employerModel.find({
        employerEmail:req.body.employerEmail,
        employerPassword:req.body.employerPassword
    })
            .then((obj)=>{
                res.status(200).send(obj)
            })
            .catch((error)=>{
                res.status(400).send(error);
            })
});


//Posting a job
router.post('/job/post',(req,res)=>{

    const job = new jobModel({
        employerId:req.body.employerId,
        location:req.body.location,
        description:req.body.description,
        website:req.body.website
    })
    
    job.save()
        .then((object)=>{
            res.status(200).send(object);
        }).catch((e)=>{
            res.status(400).send(e);
        })
});


module.exports = router;