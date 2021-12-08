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
      const err = new Error('Page Not Found');  
      err.status = 404;
      err.message = 'Page Not Found';  
      next(err);
  }
  
});



router.use((err, res, req, next) => {
  res.locals.error = err;
  
  if(err.status  === 404) {
    res.status(err.status);
    res.render('../views/page-not-found', err);
  } else {
      res.status(err.status);
      res.render('../views/error', err );
  }



});

module.exports = router;

