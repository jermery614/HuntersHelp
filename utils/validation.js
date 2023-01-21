const { check } = require('express-validator');
 
exports.signupValidation = [
    check('name', 'Name is requied').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
]
 
exports.ageValidation = [
     check('age', 'Please enter your age').not().isEmpty(),
     check('age', 'You need to be 18 to access the Database.').custom((value)=> {
        if (value < 18) throw new Error('Age must be above 18');
        return true
     })
 
]

// if (req.params.id==null){
//     return res.status(400).json({error: 'Need Id to process request.'})
//   }