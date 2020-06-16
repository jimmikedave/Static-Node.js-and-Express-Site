const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

//Redirects localhost:3000 to the homepage
router.get('/', (req, res) => {
    
    res.redirect('/home');
})

//Displays the index template and information as the homepage
router.get('/home', (req, res) => {
    const project = projects;
    
    const templateData = { project };
    
    res.render('index', templateData);
});




module.exports = router;