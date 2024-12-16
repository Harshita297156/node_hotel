const express =require('express');
const router = express.Router();
const menuItem = require('./../models/Menu');

router.post('/' , async(req,res)=>{
    try{
        const data = res.body
        const newMenu = new menuItem(data);
        const savedMenu = await newMenu.save();
        console.log("data is saved");
        res.status(200).json(savedMenu);

    }catch(err){
        console.log(err);
        res.status(500).json({error:"Internal server erroe"} );
    }
});

router.get('/', async(req,res)=>{
    try{
        const data = await menuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error:"error in fetching the data"})
    }
});




module.exports=router;