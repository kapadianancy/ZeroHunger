var express = require('express');
const { mongo, Mongoose } = require('mongoose');
var path = require('path');
var port =process.env.PORT || 8000;

var EventRoute = require('./routes/EventRoute');
var ReceiverCatRoute=require("./routes/ReceiverCatRoute");

var app = express();

require('./DBconnection')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/event', EventRoute);
app.use('/receiverCategory',ReceiverCatRoute);
app.use('/*',(req,res)=>
{
  res.status(400).send("url not found");
})

app.listen(port, () => {
  console.log("Server is running at "+port)
})