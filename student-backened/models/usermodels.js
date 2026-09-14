const express=require('express');
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({

    rollnumber:{
        type:String,
        required:true
    },
    candidatename:{
        type:String,
        required:true,

    },
    course:{
    type:String,
    required:true,
    
    },
    email:{
        type:String,
        required:true,
    },

    marks:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    
    
});
module.exports=mongoose.model('users',userSchema);