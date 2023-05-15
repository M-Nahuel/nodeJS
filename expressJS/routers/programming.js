const express = require('express');

const {programming} = require('../data/courses.js').infoCourses;

const routerProgramming = express.Router();

routerProgramming.get('/', (req, res) => {
  res.send(JSON.stringify(programming));
});
  
routerProgramming.get('/:language', (req, res) => {
  const language = req.params.language;
  const results = programming.filter(course => course.language === language);
  
  if (results.length === 0) {
    return res.status(404).send(`${language} courses not found.`);
  }
  
  if (req.query.sort === 'views') {
    return res.send(JSON.stringify(results.sort((a, b) => a.views - b.views)));
  }
  
  res.send(JSON.stringify(results));
});
  
routerProgramming.get('/:language/:level', (req, res) => {
  const language = req.params.language;
  const level = req.params.level;
  const results = programming.filter(course => course.language === language && course.level === level);
  
  if (results.length === 0) {
    return res.status(404).send(`There are no ${language} courses of level ${level}.`);
  }
    
  res.send(JSON.stringify(results));
});

module.exports = routerProgramming;