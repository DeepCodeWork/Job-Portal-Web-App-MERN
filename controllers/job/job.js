const jobModel = require('../../model/job.model');

const addJob = (req,res)=>{

    console.log(req.body)
    const job = new jobModel({
        employerId :req.body.employerId,
        location   :req.body.location,
        description:req.body.description,
        website    :req.body.website,
        category   :req.body.category,
        name       :req.body.name      
    })
    
    job.save()
        .then((object)=>{
            res.status(200).send(object);
        }).catch((e)=>{
            res.status(400).send({error:errorHandler(e)});
        })
}

const getJobsById = (req,res) => {
    jobModel.find({employerId:req.params.id})
        .then((data)=>{
            res.status(200).json({data})
        }).catch((error)=>{
            res.send(404).json({error:error});
        })
}

const getJobsByLocation = (req,res) => {
    jobModel.find({location:req.params.location})
        .then((data)=>{
            res.status(200).json({data})
        }).catch((error)=>{
            res.send(404).json({error:error});
        })
}

const getJobsByCategory = (req,res) => {
    jobModel.find({category:req.params.category,
        location:req.params.location})
        .then((data)=>{
            res.status(200).json({data})
        }).catch((error)=>{
            res.send(404).json({error:error});
        })
}

module.exports = {addJob,getJobsById,getJobsByLocation,getJobsByCategory};