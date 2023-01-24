const { check } = require('express-validator');
const {tokenCheck} = require('axios');
 
// exports.signupValidation = [
//     check('name', 'Name is requied').not().isEmpty(),
//     check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
//     check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
// ]
 
exports.ageValidation = [
     check('age', 'Please enter your age').not().isEmpty(),
     check('age', 'You need to be 18 to access the Database.').custom((value)=> {
        if (value < 18) throw new Error('Age must be above 18 to update or create an database entry.');
        return true
     })
 
]

// exports.gotToken = [ 

//    tokenCheck('token', 'Please login').not().isEmpty(),
//    tokenCheck('token', 'You need a token to access this site.').custom((value)=>{
//       if (value === null) throw new Error('You must have a vaild token to access this site.');
//       return true
//    })

// ]

// exports.ageUpdate = [
//     check('age', 'Please enter your age').not().isEmpty(),
//     check('age', 'You must be 18 to Update the Database.').custom((value) => {
//         if (value < 18) throw new Error('Age must be above 18');
//         return true
//     })
// ]

// if (req.params.id==null){
//     return res.status(400).json({error: 'Need Id to process request.'})
//   }