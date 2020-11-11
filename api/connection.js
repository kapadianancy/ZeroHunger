const mongoose = require('mongoose')

const con=mongoose.connect('mongodb://127.0.0.1:27017/ZeroHunger',{
    useNewUrlParser : true,
    useCreateIndex : true
})

if(con)
{
    console.log("Connection Establish")
}
else
{
    throw Error("connection failed");
}