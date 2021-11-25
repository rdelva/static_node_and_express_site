//Import Express and set up the app
const express = require('express');
const app = express();

//Turn on Express  Server
app.listen(3000, () =>{
    console.log('Server listening on port 3000');
})