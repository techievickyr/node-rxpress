import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import bootstrap from './bootstrap';

var app = express();

var options = { doctype: '', beautify: false };

// view engine setup
app.set('views', __dirname + '/src');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine(options));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', bootstrap);

module.exports = app;
