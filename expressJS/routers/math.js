const express = require('express');

const {math} = require('../data/courses.js').infoCourses;

const routerMath = express.Router();

routerMath.get('/', (req, res) => {
  res.send(JSON.stringify(math));
});
  
routerMath.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const results = math.filter(course => course.subject === subject);
  
  if (results.length === 0) {
    return res.status(404).send(`${subject} courses not found.`);
  }
  
  res.send(JSON.stringify(results));
});
  
routerMath.get('/:subject/:level', (req, res) => {
  const subject = req.params.subject;
  const level = req.params.level;
  const results = math.filter(course => course.subject === subject && course.level === level);
  
  if (results.length === 0) {
    return res.status(404).send(`There are no ${subject} courses of ${level} level.`);
  }
  
  res.send(JSON.stringify(results));
});

module.exports = routerMath;