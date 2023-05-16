const express = require('express');

const {programming} = require('../data/courses.js').infoCourses;

const routerProgramming = express.Router();

routerProgramming.use(express.json());

routerProgramming.get('/', (req, res) => {
  res.json(programming);
});
  
routerProgramming.get('/:language', (req, res) => {
  const language = req.params.language;
  const results = programming.filter(course => course.language === language);
  
  if (results.length === 0) {
    return res.status(404).send(`${language} courses not found.`);
  }
  
  if (req.query.sort === 'views') {
    return res.send(results.sort((a, b) => a.views - b.views));
  }
  
  res.json(results);
});
  
routerProgramming.get('/:language/:level', (req, res) => {
  const language = req.params.language;
  const level = req.params.level;
  const results = programming.filter(course => course.language === language && course.level === level);
  
  if (results.length === 0) {
    return res.status(404).send(`There are no ${language} courses of level ${level}.`);
  }
    
  res.json(results);
});

routerProgramming.post('/', (req, res) => {
    //TODO: add validation method
    let newCourse = req.body;
    programming.push(newCourse);
    res.json(programming);
});

routerProgramming.put('/:id', (req, res) => {
    const modifiedCourse = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id);

    if (index >= 0) {
        programming[index] = modifiedCourse;
    }
    res.json(programming);
});

routerProgramming.patch('/:id', (req, res) => {
    const modified = req.body;
    const id = req.params.id;

    const index = programming.findIndex(course => course.id == id);

    if (index >= 0) {
        const courseMod = programming[index];
        Object.assign(courseMod, modified);
    }
    res.json(programming);
});

routerProgramming.delete('/:id', (req, res) => {
    const id = req.params.id;
    const index = programming.findIndex(course => course.id == id);

    if(index >= 0) {
        programming.splice(index, 1);
    }
    res.json(programming);
});

module.exports = routerProgramming;