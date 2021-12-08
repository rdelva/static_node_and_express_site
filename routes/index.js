const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', function(req, res, next) {
    res.render('index',  { projects } );
      
});

router.get('/about', function(req, res, next) {
  res.render('about',  { projects } );
    
});



//Project Pages

router.get('/project/:id', (req, res, next) => {

  const projectId = req.params.id;
  const project =  projects.find( ({ id }) => id === + projectId );
  
  if(project) {
    // Pass the project data to the project template
    res.render('project', { project, projectId } );
  } else {
      const err = new Error(`Project ${projectId} Not Found`);
      err.status = 400;
      next(err);
      
  }
 
});


router.use((err, req, res, next) => {
 
  res.locals.error = err;
  if(err.status === 400){
    res.render('page-not-found', {err});
  } else {
    res.render('error', {err});
  }
 
});

module.exports = router;

