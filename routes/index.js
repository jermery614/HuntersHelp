const express = require('express');
const router = express.Router();

router.use('/calibre', require('./calibre'));
router.use('/', require('./swagger'));


// This is the one that seems to work.
function userPerson(person) {
    try{
         if (person.age == null){
        console.log("Sorry, you must enter an age.")
        return
    }
        if (person.age >= 18){
        console.log("Welcome, you may enter.")
        router.use('/calibre', require('./calibre'));
        router.use('/', require('./swagger'));
    }
        else {
        console.log("Your are too young")
        process.exit()
    }
    } 
    catch (err) {
        res.status(500).json(err);
    }
   

};
const p = {
    age:22,
}
userPerson(p)


// const p1 = {
//     age:12,
// }
// userPerson(p1)


module.exports = router;