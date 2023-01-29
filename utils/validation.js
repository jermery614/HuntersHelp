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

exports.isAdmin = [
   check('admin', 'are you admin(verified by token)').not().isEmpty(),
   check('admin', 'You need to be and administrator to alter this database.' ).custom((value)=> {
      if (value === false) throw new Error(' You must be an administrator to alter the database, or contact admin if info is incorrect.');
      return true
   })
]