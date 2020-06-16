const express = require('express');
const router  = express.Router();

const {employerById,requireSignInPages, isAdmin,isAuth} = require('../../controllers/employer/employer');

router.param("employerId",employerById);
module.exports = router