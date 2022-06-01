const asynchandler=require('express-async-handler')
const patientregistration=require('../models/patientregmodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

//create patients
//route post:patients/register

const createpatient=asynchandler(async(req,res)=>{
var{patientid,firstname,lastname,gender,dob,email,password}=req.body
//check for duplicate emails
const patient_exists= await patientregistration.findOne({email})

if(patient_exists)
{
throw new Error('patient already exists')
}

//hashing password

const salt= await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(password,salt)

//random id generation

var patientid=Math.floor(Math.random() * 1000000000)
var patientidexists=await patientregistration.findOne({patientid})
while(patientidexists){
    var patientid=Math.floor(Math.random() * 1000000000)
    var patientidexists=await patientregistration.findOne({patientid})
}
//creation
const create_new_patient=await patientregistration.create({
patientid,firstname,lastname,gender,dob,email,password:hashedpassword
})
//display of created patients
res.json({
    Patient_id:create_new_patient.patientid,
    Firstname:create_new_patient.firstname,
    Lastname:create_new_patient.lastname,
    Gender:create_new_patient.gender,
    Date_of_birth:create_new_patient.dob,
    Email:create_new_patient.email,
    Token:generatetoken(create_new_patient._id)
})
})

//login patient

const loginpatient=asynchandler(async(req,res)=>{
    const{email,password}=req.body
    const patient=await patientregistration.findOne({email})
    if(!patient)
    {
        throw new Error('patient not exists')
    }
    const patientcheck=await bcrypt.compare(password,patient.password)
    if(! patientcheck)
    {
        throw new Error('invalid password')
    }
    res.json({
        firstname:patient.firstname,
        lastname:patient.lastname,
        gender:patient.gender,
        email:patient.email,
        token:generatetoken(patient._id)
    })
})




//get patients with id
//route get:patients/get/:id

const getpatient=asynchandler(async(req,res)=>{
    res.json(req.patient)
    })

//update patients with id
//route put:patients/update/:id

const updatepatient=asynchandler(async(req,res)=>{
    res.json({
        message:'update is working'
    })
})

//generate token
const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'10d'},)
}



module.exports={
    createpatient,
    loginpatient,
    getpatient,
    updatepatient,
}