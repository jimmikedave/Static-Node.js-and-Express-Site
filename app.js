//Each module is required
const express = require('express');
const { response } = require('express');

//Creates a server when called
const app =  express();

//Sets the view engine to pug
app.set('view engine', 'pug');

//Each module is required
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects')
const aboutRoutes = require('./routes/about')

//When the designated path is called the middleware function is called
app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

//Serves our static files such as images, CSS, and JS files
app.use('/static', express.static('public'))

//Handles and displays user error when they occur
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  })
  
  app.use((err, req, res, next) => {
    res.locals.error = err;
    const status = err.status;
    console.log(`Oops! There seems to be an error: ${err.status} ${err.message}`);
    res.status(status);
    res.render('error');
  })  

//Listens for the port 3000 to be called  
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});