const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const projectRouter = require('./routes/project.routes');
const usersRouter = require('./routes/users.routes');
const educationRouter = require('./routes/education.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/project', projectRouter);
app.use('/users', usersRouter);
app.use('/education', educationRouter);

module.exports = app;
