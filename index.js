const express = require('express')
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

const coursesData = require('./data/courses.json') 

app.get('/', (req, res)=>{
    res.send('News API Running');
})

app.get('/courses', (req, res)=>{
    res.send(coursesData);
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const perCourse = coursesData.find((courses)=> courses._id == id);

    res.send(perCourse);
})

app.listen(port, ()=>{
    console.log('Codecademy running');
})