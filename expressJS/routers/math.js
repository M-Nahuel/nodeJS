const express = require('express');

const {math} = require('../data/courses.js').infoCourses;

const routerMath = express.Router();

routerMath.use(express.json());

routerMath.get('/', (req, res) => {
  res.json(math);
});
  
routerMath.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const results = math.filter(course => course.subject === subject);
  
  if (results.length === 0) {
    return res.status(404).send(`${subject} courses not found.`);
  }

  if (req.query.sort === 'views') {
    return res.send(results.sort((a, b) => a.views - b.views));
  }
  
  res.json(results);
});
  
routerMath.get('/:subject/:level', (req, res) => {
  const subject = req.params.subject;
  const level = req.params.level;
  const results = math.filter(course => course.subject === subject && course.level === level);
  
  if (results.length === 0) {
    return res.status(404).send(`There are no ${subject} courses of ${level} level.`);
  }
  
  res.json(results);
});

routerMath.post('/', (req, res) => {
  //TODO: add validation method
  let newCourse = req.body;
  math.push(newCourse);
  res.json(math);
});

routerMath.put('/:id', (req, res) => {
  const modifiedCourse = req.body;
  const id = req.params.id;

  const index = math.findIndex(course => course.id == id);

  if (index >= 0) {
      math[index] = modifiedCourse;
  }
  res.json(math);
});

routerMath.patch('/:id', (req, res) => {
  const modified = req.body;
  const id = req.params.id;

  const index = math.findIndex(course => course.id == id);

  if (index >= 0) {
      const courseMod = math[index];
      Object.assign(courseMod, modified);
  }
  res.json(math);
});

routerMath.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = math.findIndex(course => course.id == id);

  if(index >= 0) {
      math.splice(index, 1);
  }
  res.json(math);
});

module.exports = routerMath;