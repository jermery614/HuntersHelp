const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
const app = express();
const axios = require('axios');

app.use(express.static('static'));
app.get('/', (req, res)=>{
  
  // res.sendFile(path.join(__dirname, '/static/index.html'));
  // res.sendFile(path.join(__dirname, '/static/age.html'));
});

app.get('/auth', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});
app.get('/oauth-callback', ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
      console.log('My token:', token);

      if (token === null){
        console.log('Hello, you have not logged in.')
        process.exit();
      } else {
        console.log('Got it!');
      
        // console.log(token);
        // res.redirect(`/?token=${token}`);
        // trying to set up a check.
        // if (token!= null){
        //   // app.use('/', require('./routes'));
        //   // console.log("hello, please see me 1.")
          
        // }
        
        // res.redirect('http://localhost:8080');
        
        
        
        
      }
      res.redirect(`/?token=${token}`);
      
        // res.redirect('/calibre')

    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});