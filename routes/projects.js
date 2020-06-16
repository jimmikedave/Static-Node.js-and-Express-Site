const express = require('express');
const router = express.Router();
const { data } = require('../data.json');
const { projects } = data;

//Displays a page for each project with using the project template and information for each project
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const locals = projects[id];
    const { projectName } = locals; 
    const { description } = locals;
    const { technologies } = locals;
    const { liveLink } = locals;
    const { githubLink } = locals;
    const { imageUrls }  = locals;

    const templateData = { projectName, description, technologies, liveLink, githubLink, imageUrls }

    res.render('project', templateData);
});

module.exports = router;