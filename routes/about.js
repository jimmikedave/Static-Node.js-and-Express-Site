const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

//Displays the about page template and information
router.get('/', (req, res) => {
    const project = projects;
    
    const templateData = { project };
    
    res.render('about', templateData);
});

module.exports = router;