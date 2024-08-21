const express = require('express');
const Router=express.Router();

Router.get('/',(req,res)=>{
    obj={
        name:"salman",
        number:332
    }
    res.json(obj);
});
module.exports=Router;