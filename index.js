const express = require('express');

const dotenv = require('dotenv');

const app = express();
app.use(express.json());

const { CreateCourseRequest } = require('./src/Http/Requests/Courses/CreateCourseRequest');
const createCourseRequest = new CreateCourseRequest();

dotenv.config();

app.use((req, res, next) => {
    return next();
});

app.post('/courses', createCourseRequest.validation, (req, res) => {
    res.status(200).json(req.body)
});

const APPLICATION_PORT = process.env.APPLICATION_PORT;

app.listen(APPLICATION_PORT);