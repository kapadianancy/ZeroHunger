var express = require('express');
const { mongo, Mongoose } = require('mongoose');
var path = require('path');

var EventRoute = require('./routes/EventRoute');

var app = express();

require('./DBconnection')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/event', EventRoute);








app.listen(8000, () => {
  console.log("Server is running")
})