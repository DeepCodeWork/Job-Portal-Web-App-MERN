const express = require('express');
const router = express.Router();
const validator = require('../../validator/employerSignupValidator');
const signUp = require('../../controllers/employer/auth/signUp');
const login = require('../../controllers/employer/auth/login');
const logout = require('../../controllers/employer/auth/logout');



//Adding a new Employer to the database
router.post('/add',validator,signUp);

//Fetching an employer
router.post('/get',login);


//Signing out the user
router.get('/logout',logout)



module.exports = router