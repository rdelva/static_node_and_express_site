const express = require('express');
const router = express.Router();
const { projects } = require('../data/data.json');

router.get('/', function(req, res, next) {
    res.render('index',  { projects } );
      
});


router.use((req, res, next) => {
  console.log("This is an error");
  const err = new Error('This is an error!!!!!');
  next(err);

});

router.use((err, req, res, next) => {
  res.locals.error = err;
  res.render('error', err);

});



module.exports = router;


//Error Handlers
// router.get('/:id', (req, res, next) => {
//     console.log(`Quote ${req.params.id} route called`);
  
//     /* TODO 3: Check if the requested quote exists 
//         - If quote exists, render the 'quote' view with the quote
//         - Else:
//           * Create a new 404 error
//           * Provide an error message
//           * Forward the error to the global error handler
//     */
//     if (projects[req.params.id]){
//       res.render('project', {title: 'Code Quote', quote: quotes[req.params.id] });
//     } else {
//       const err = new Error();
//       err.status = 404;
//       err.message = `Looks like the quote you requested doesn't exist`;
//       next(err);
//     }
  
//   });