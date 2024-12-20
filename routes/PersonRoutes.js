const express = require('express');
const Person = require('../models/Person');
const router = express.Router();

router.post('/', async(req, res)=>{
    try{
        const data = req.data;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);


    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }

})

router.get('/',async(req,res)=>{
    try{
         const data = await Person.find();
         console.log('data fetched');
         res.status(200).json(data);
    }catch(err){
          console.log("error is there in fetching the data");
          res.status(500).json({error:"internal error is there"});
    }
})
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType;
        if(workType=='chef'||workType=="manager"||workType=="owner"){
         const response= await Person.find({work:workType});
         console.log('response fetched');
         res.status(200).json(response);

        }else{
            res.status(404).json({error:'invalid work type'});
        }
 }
 catch(err){
console.log(err);
res.status(500).json({error:"internal error is there"});
}})

router.put('/:id', async(req,res)=>{
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;
        const response= await Person.findByIdAndUpdate(personId,updatedPersonData,{
            new: true,// return the update document
            runValidators:true,//run mongoose validation
        })
        if(!response){return res.status(404).json({error:"person not found"});}
        console.log('data updated');
        res.status(200).json(response);
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'})
    }
})

router.delete('/:id' , async(req,res)=>{
    try{
        const PersonId = req.params.id;
        
        const response = await Person.findByIdAndDelete(PersonId);
        if(!response){return res.status(404).json({error:'Internal server error'});}
         console.log('data deleted');
         res.status(200).json({message:'Person deleted successfully'});

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server error"})
    }
})


module.exports= router;