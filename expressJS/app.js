const express = require('express');
const app = express();

const {infoCourses} = require('./data/courses.js');

//TODO: add a function to add queries in each path

//Routers

//Programming
const routerProgramming = require('./routers/programming.js');
app.use('/api/courses/programming', routerProgramming);
//Math
const routerMath = require('./routers/math.js');
app.use('/api/courses/math', routerMath);


app.get('/', (req, res) => {
    res.send('Hi! Whats up?');
});

app.get('/api/courses', (req, res) => {
  res.send(JSON.stringify(infoCourses));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`The server is listening at port: ${PORT}...`);
});