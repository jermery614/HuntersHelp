// const { default: axios } = require('axios');
const { check } = require('express-validator');
// const {tokenCheck} = require('axios');
// const { tokenCheck} = require('express-validator');
 

 
exports.ageValidation = [
     check('age', 'Please enter your age').not().isEmpty(),
     check('age', 'You need to be 18 to access the Database.').custom((value)=> {
        if (value < 18) throw new Error('Age must be above 18 to update or create an database entry.');
        return true
     })
 
]

