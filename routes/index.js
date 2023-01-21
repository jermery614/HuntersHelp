const express = require('express')
const router = express.Router();


// const ps = require("prompt-sync");
// const prompt = ps();
// let usrAge = prompt("What is your age ?");

router.use('/calibre', require('./calibre'));
router.use('/', require('./swagger'));

// function userPerson(person) {
//     try{
//          if (person?.age == null){
//         console.log("Sorry, you must enter an age.")
//         return
//     }
//     if (person.age >= 18){
//         console.log("Welcome")
//         router.use('/calibre', require('./calibre'));
//         router.use('/', require('./swagger'));
//     }
//     else {
//         console.log("Your are too young")
//         process.exit()
//     }
//     } catch (err) {
//         res.status(500).json(err);
//     }
   

// };
// const p = {
//     age:22,
// }
// userPerson(p)


// const p1 = {
//     age:12,
// }
// userPerson(p1)



// routes.get('/', (req, res) => {
//   res.send('Anna Wheeler');
// });

// routes.get('/test', (req, res) => {
//     res.send('Jermery Wheeler');
// });

module.exports = router;