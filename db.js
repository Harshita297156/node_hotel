const mongoose = require('mongoose');

//define the mongodb connection URL
const mongoURL ="mongodb//localhost:27017/hotels" //replace my database to the name you want to give to your database

// set up mongodb connection
mongoose.connect('mongodb://localhost:27017/hotels',{
    
    
});

//get the default connection
//mongoose maintain a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//event listener 
db.on('connected',()=>{
    console.log("connected to MongoDB server");
});

db.on('erroe',(err)=>{
    console.log("MongoDB connection error", err);
});

db.on('disconnected',()=>{
    console.log("MongoDB disconnected ");
});

module.exports=db;