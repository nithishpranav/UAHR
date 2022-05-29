const asynchandler=require('express-async-handler')
const doctorregistrationmodel=require('../models/doctorregmodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

//creation of doctor

const doctorregistration=asynchandler(async(req,res)=>{
    const {doctorlicense,firstname,lastname,gender,email,password}=req.body

    // check if email already exists

   const doctoralreadyexist=await doctorregistrationmodel.findOne({email})

   
   //hash passwors

   const salt=await bcrypt.genSalt(10)
   const hashedpassword=await bcrypt.hash(password,salt)

   //create user

   const createnewdoctor= await doctorregistrationmodel.create({
    doctorlicense,firstname,lastname,gender,email,password:hashedpassword
   })

   res.json({doctorlicense,firstname,lastname,gender,email})
})

const doctorget=asynchandler(async(req,res)=>{
    res.json({
        message:'doctor login is working'
    })
})

const doctorupdate=asynchandler(async(req,res)=>{
    res.json({
        message:'doctor update is working'
    })
})

const doctordelete=asynchandler(async(req,res)=>{
    res.json({
        message:'doctor delete is working'
    })
})


module.exports={doctorregistration,doctorget,doctorupdate,doctordelete}