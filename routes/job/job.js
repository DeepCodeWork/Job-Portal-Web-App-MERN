const express = require('express');
const router = express.Router();
const {addJob,getJobsById, getJobsByLocation, getJobsByCategory}  = require('../../controllers/job/job');

//Adding a job
router.post('/add',addJob);

//Get job by employer id
router.get('/getById/:id',getJobsById)

//get job by location
router.get('/getByLocation/:location', getJobsByLocation)

//get job by category
router.get('/getByCategory/:location/:category', getJobsByCategory)

module.exports = router;