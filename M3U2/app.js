var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var ramiroRouter = require('./routes/ramiro');
var yogaintegralRouter = require ('./routes/yogaintegral');
var psicologicaRouter = require ('./routes/psicologica');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/ramiro', ramiroRouter);
app.use('/YogaIntegral', yogaintegralRouter);
app.use('/Psicologica', psicologicaRouter);

app.get('/ramiro', function (req, res){res.render('ramiro')}
);

app.get('/YogaIntegral', function (req, res){res.render('yogaintegral')}
);

app.get('/Psicologica', function (req, res){res.render('psicologica')}
);

app.get('/home', function (req, res){res.render('home')})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
