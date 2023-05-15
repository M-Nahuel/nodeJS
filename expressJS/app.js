const express = require('express');
const app = express();
const {infoCourses} = require('./courses.js');

app.get('/', (req, res) => {
    res.send('Hi! Whats up?');
});

app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

app.get('/api/courses/programming', (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});

app.get('/api/courses/programming/:language', (req, res) => {
  const language = req.params.language;
  const results = infoCourses.programming.filter(course => course.language === language);

  if (results.length === 0) {
    return res.status(404).send(`${language} courses not found.`);
  }

  res.send(JSON.stringify(results));
});

app.get('/api/courses/programming/:language/:level', (req, res) => {
  const language = req.params.language;
  const level = req.params.level;
  const results = infoCourses.programming.filter(course => course.language === language && course.level === level);

  if (results.length === 0) {
    return res.status(404).send(`There are no ${language} courses of level ${level}.`);
  }
  
  res.send(JSON.stringify(results));
});

app.get('/api/courses/math', (req, res) => {
  res.send(JSON.stringify(infoCourses.math));
});

app.get('/api/courses/math/:subject', (req, res) => {
  const subject = req.params.subject;
  const results = infoCourses.math.filter(course => course.subject === subject);

  if (results.length === 0) {
    return res.status(404).send(`${subject} courses not found.`);
  }

  res.send(JSON.stringify(results));
});

app.get('/api/courses/math/:subject/:level', (req, res) => {
  const subject = req.params.subject;
  const level = req.params.level;
  const results = infoCourses.math.filter(course => course.subject === subject && course.level === level);

  if (results.length === 0) {
    return res.status(404).send(`There are no ${subject} courses of ${level} level.`);
  }

  res.send(JSON.stringify(results));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}...`);
});