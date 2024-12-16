const mongoose = require('mongoose');
//define the person schema
const personSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','owner','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
});
//create person model
const Person= mongoose.model('Person',personSchema);
module.exports= Person;