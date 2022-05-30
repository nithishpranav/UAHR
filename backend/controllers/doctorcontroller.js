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

   res.json({doctorlicense,firstname,lastname,gender,email,Token:generatetoken(createnewdoctor._id)})
})

//doctor login

const doctorlogin=asynchandler(async(req,res)=>{
    const{email,password}=req.body
    const doctor=await doctorregistration.findOne({email})
    if(!doctor)
    {
        throw new Error('doctor not exists')
    }
    const doctorcheck=await bcrypt.compare(password,doctor.password)
    if(! doctorcheck)
    {
        throw new Error('invalid password')
    }
    res.json({
        firstname:doctor.firstname,
        lastname:doctor.lastname,
        gender:doctor.gender,
        email:doctor.email,
        token:generatetoken(doctor._id)
    })
})

//update doctor

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

//

const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'10d'},)
}

module.exports={doctorregistration,doctorlogin,doctorupdate,doctordelete}