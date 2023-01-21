const express = require('express');
const router = express.Router();
// const prm = require('prompt');
// const prompt = require('prompt-sync')();
// const name = prompt('Hello, what is your name? ');
// const age = prompt('What is your age? ');
// try {
//     if (age == null) {
//         console.log("please enter your age")
//         return age
//     } if ( name == null) {
//         console.log("please enter a name")
//         return name
//     } if (age <= 17) { 
//         return age.status(501).json({error: " Sorry," +name+" you are not old enough."})
        
//     } else {
//         console.log("Welcome, "+ name);
//         router.use('/calibre', require('./calibre'));
//         router.use('/', require('./swagger'));
//     }
// }catch (err) {
//     res.status(500).json(err);
// };


// prm.start()
// prm.get(['username', 'userage'], function (err, result) {
//     if (err) { console.log('got an error: ', err) }
//     console.log( 'Command-line input received: ')
//     console.log('  Username: ' + result.username)
//     console.log('  Userage: ' + result.userage)
//     try {
//         if ( result.userage <= 17)  {return result.status(501).json({error: 'User is not old enough, yet. '})

//         } else {
//             console.log("Welcome")
//             router.use('/calibre', require('./calibre'));
//             router.use('/', require('./swagger'));
//         }
//     } catch (err) {
//                 res.status(500).json(err);
//             }

// });



function userPerson(person) {
    try{
         if (person?.age == null){
        console.log("Sorry, you must enter an age.")
        return
    }
    if (person.age >= 18){
        console.log("Welcome")
        router.use('/calibre', require('./calibre'));
        router.use('/', require('./swagger'));
    }
    else {
        console.log("Your are too young")
        process.exit()
    }
    } catch (err) {
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



// routes.get('/', (req, res) => {
//   res.send('Anna Wheeler');
// });

// routes.get('/test', (req, res) => {
//     res.send('Jermery Wheeler');
// });

module.exports = router;