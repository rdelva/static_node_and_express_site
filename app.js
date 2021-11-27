//Import Express and set up the app
const express = require('express');
const app = express();
const path = require('path');


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Import Routes
const routes = require('./routes');
app.use(routes);


//Turn on Express  Server
app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});

