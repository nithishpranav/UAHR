const asynchandler=require('express-async-handler')
const patientregistrationmodel=require('../models/patientmodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const { Error } = require('mongoose')
const { updateShorthandPropertyAssignment } = require('typescript')

//create patients
//route post:patients/register

const createpatient=asynchandler(async(req,res)=>{
var{patientid,firstname,lastname,gender,dob,email,password}=req.body
//check for duplicate emails
const patient_exists= await patientregistrationmodel.findOne({email})

if(patient_exists)
{
throw new Error('patient already exists')
}

const salt= await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(password,salt)

//random id generation

var patientid=Math.floor(Math.random() * 1000000000)
var patientidexists=await patientregistrationmodel.findOne({patientid})
while(patientidexists){
    var patientid=Math.floor(Math.random() * 1000000000)
    var patientidexists=await patientregistrationmodel.findOne({patientid})
}
//creation
const create_new_patient=await patientregistrationmodel.create({
patientid,firstname,lastname,gender,dob,email,password:hashedpassword
})
//display of created patients
res.json({
    Patient_id:create_new_patient.patientid,
    Firstname:create_new_patient.firstname,
    Lastname:create_new_patient.lastname,
    Gender:create_new_patient.gender,
    Date_of_birth:create_new_patient.dob,
    Email:create_new_patient.email
})
})

//get patients with id
//route get:patients/get/:id

const getpatient=asynchandler(async(req,res)=>{
    res.json({
        message:'get is working'
    })
    })

//update patients with id
//route put:patients/update/:id

const updatepatient=asynchandler(async(req,res)=>{
    res.json({
        message:'update is working'
    })
})


module.exports={
    createpatient,
    getpatient,
    updatepatient,
}