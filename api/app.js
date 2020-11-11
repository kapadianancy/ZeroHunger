var express = require('express');
const { mongo, Mongoose } = require('mongoose');
var path = require('path');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

require('./DBconnection')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);








app.listen(8000,()=>{
  console.log("Server is running")
})