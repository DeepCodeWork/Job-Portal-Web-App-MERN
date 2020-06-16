const employerSignUpValidator = (req,res,next) => {
    req.check('employerName','Name is required').notEmpty();
    req.check('employerEmail').isUnique
    req.check('employerEmail','Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min:4,
            max:32
        });
    
    
    req.check('employerPassword','Password is required').notEmpty()
    req.check('employerPassword')
        .isLength({min:6})
        .withMessage('password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a digit')
    
    req.check('employerNumber','Number is required').notEmpty()
    req.check('employerNumber')
        .isLength(10)
        .withMessage('Number should be of 10 digits')
        .matches(/^[0-9]*$/)
        .withMessage('Number only contains digits')
        
    const errors = req.validationErrors();
    if(errors){
        const firstError = errors.map(error => error.msg)[0];
        console.log(firstError);
        return res.status(400).json({error:firstError})
    }
    next();
}

module.exports = employerSignUpValidator;