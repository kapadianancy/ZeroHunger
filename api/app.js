var express = require('express');
const { mongo, Mongoose } = require('mongoose');
var path = require('path');
var port =process.env.PORT || 8000;

var EventRoute = require('./routes/EventRoute');
var ReceiverCatRoute=require("./routes/ReceiverCatRoute");
var DonationRoute = require('./routes/DonationRoute');
var PortfolioRoute = require('./routes/PortfolioRoute');

var app = express();

require('./DBconnection')



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/event', EventRoute);
app.use('/receiverCategory',ReceiverCatRoute);
app.use('/donation',DonationRoute);
app.use('/portfolio',PortfolioRoute);
app.use('/*',(req,res)=>
{
  res.status(400).send("Url Not Found");
})

app.listen(port, () => {
  console.log("Server is running at "+port)
})