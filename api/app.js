var express = require('express');
const { mongo, Mongoose } = require('mongoose');
var path = require('path');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

require('./DBconnection')
const Role = require('./models/Role')
var ObjectID = require('mongodb').ObjectID;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);


app.get('/',async(req,res)=>{
  const R = new Role({
    _id:new ObjectID(),
    name:"Admin"
  })
    try{
    await R.save()
    return res.send("Insetred")
    }catch(e){
        return res.status(400).send(e)
    }
})





app.listen(8000,()=>{
  console.log("Server is running")
})