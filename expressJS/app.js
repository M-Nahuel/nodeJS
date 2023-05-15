const express = require('express');
const app = express();
const {infoCourses} = require('./courses.js');

//TODO: add a function to add queries in each path

//Routers
const routerProgramming = express.Router();
app.use('/api/courses/programming', routerProgramming);
const routerMath = express.Router();
app.use('api/courses/math', routerMath);


app.get('/', (req, res) => {
    res.send('Hi! Whats up?');
});

app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

routerProgramming.get('/', (req, res) => {
  res.send(JSON.stringify(infoCourses.programming));
});

routerProgramming.get('/:language', (req, res) => {
  const language = req.params.language;
  const results = infoCourses.programming.filter(course => course.language === language);

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
  const results = infoCourses.programming.filter(course => course.language === language && course.level === level);

  if (results.length === 0) {
    return res.status(404).send(`There are no ${language} courses of level ${level}.`);
  }
  
  res.send(JSON.stringify(results));
});

routerMath.get('/', (req, res) => {
  res.send(JSON.stringify(infoCourses.math));
});

routerMath.get('/:subject', (req, res) => {
  const subject = req.params.subject;
  const results = infoCourses.math.filter(course => course.subject === subject);

  if (results.length === 0) {
    return res.status(404).send(`${subject} courses not found.`);
  }

  res.send(JSON.stringify(results));
});

routerMath.get('/:subject/:level', (req, res) => {
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