//Import Express and set up the app
const express = require('express');
const app = express();
const path = require('path');


//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Add static middleware
app.use('/static', express.static(path.join(__dirname, 'public')));


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

//Import Routes
const routes = require('./routes');
app.use(routes);



// Error Handlers
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.message = "OH OH You took a wrong turn at Alburqueue!"
    err.status = 404;
    next(err);
  
});


app.use((req, res, next) => {
    console.log("This is an error");
    const err = new Error('This is an error!!!!!');
    err.status = 500;
    next(err);
  
});
  
app.use((err, req, res, next) => {
    res.locals.error = err;


    if(err.status  === 404) {
        res.status(err.status);
        res.render('page-not-found', err);
    } else {
        res.status(err.status);
        res.render('error', err );
    }
  
  
  
});
  
  

//Turn on Express  Server
app.listen(3000, () =>{
    console.log('Server listening on port 3000');
});

