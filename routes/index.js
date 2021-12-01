const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', function(req, res, next) {
    res.render('index',  { projects } );
      
});


//Project Pages

router.get('/project/:id', (req, res, next) => {

  const projectId = req.params.id;
  const project =  projects.find( ({ id }) => id === + projectId );

  if(project) {
    // Pass the project data to the project template
    res.render('project', { projects} );
  } else {
    res.sendStatus(404);
  }

});

module.exports = router;

