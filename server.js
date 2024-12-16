// var notes = require("./notes");
// var _ = require('lodash');
// var age = notes.age;
// var data =['person', 'person',1,2,1,1,5,'1','2'];
// var filter =_.uniq(data);
// console.log(filter);
// console.log(_.isString('prince'));
// var result = notes.addNumber(age+18,10);

// const { json } = require("express");

// // console.log("result is :" + result);
// const objectToConvert = {"name" : "john" , 
//     "age":24,
//     "city":"New York"
// };
// const jsonStringified =JSON.stringify(objectToConvert);
// console.log(jsonStringified);
// console.log(typeof jsonStringified);
const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());//req.body

const Person = require('./models/Person');
const menuItem = require('./models/Menu');

app.get('/', (req, res) => {
    res.send("Welcome to my hotel.. How can I help you?");
});

//import the router file
const PersonRoutes = require('./routes/PersonRoutes');
const menuItemRoutes =require('./routes/menuItemRoutes');
app.use('/person', PersonRoutes)
app.use('/menu',menuItemRoutes)


app.listen(3000, () => {
    console.log("3000 port is running");
});
