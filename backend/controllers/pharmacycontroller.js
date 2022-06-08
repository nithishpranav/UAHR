const asynchandler=require('express-async-handler')
const pharmacyregistration=require('../models/pharmacyregmodel')
const prescriptions=require('../models/prescriptions')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

//create pharmacy
//route post:pharmacy/register

const createpharmacy=asynchandler(async (req,res)=>{
var{pharmacylicense,pharmacyname,pharmacyphone,email,password}=req.body

//finding duplicates

const pharmacyexists=await pharmacyregistration.findOne({email})

if(pharmacyexists){
    throw new Error('pharmacy already exists')
}

//hash password

const salt=await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(password,salt)

//create pharmacy
const newpharmacy=await pharmacyregistration.create({
    pharmacylicense,pharmacyname,pharmacyphone,
    email,password:hashedpassword
})
//display created daya
res.json({
    pharmacylicense,pharmacyname,pharmacyphone,email,Token:generatetoken(newpharmacy._id)
})

})


//login


const loginpharmacy=asynchandler(async(req,res)=>{
    const {email,password}=req.body
    const pharmacy=await pharmacyregistration.findOne({email})
    if(!pharmacy){
        throw new Error('pharmist dont exists !!!')
    }
    const pharmacycheck=await bcrypt.compare(password,pharmacy.password)
    if(!pharmacycheck){
        throw new Error('invalid credentials')
    }
    res.json({
        pharmacylicense:pharmacy.pharmacylicense,
    pharmacyname:pharmacy.pharmacyname,
    pharmacyphone:pharmacy.pharmacyphone,
    email:pharmacy.email,
    Token:generatetoken(pharmacy._id)
    })
})

//getpharmacy


const pharmacyget=asynchandler(async(req,res)=>{
    res.json(req.pharmacy)
})


const pharmacydelete=()=>{
    res.json({
        message:'delete working'
    })
}


//get patient prescriptions

const pharmacygetprescriptions=asynchandler(async(req,res)=>{
    const {patientid,doctorlicense}=req.body
    const prescriptiondata=await prescriptions.findOne({patientid,doctorlicense})
    if(!prescriptiondata){
        throw new Error('prescription not existe')
    }
    res.json(prescriptiondata)
})


//generate token

const generatetoken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:'10d'},)
}


module.exports={createpharmacy,loginpharmacy,pharmacyget,pharmacygetprescriptions,pharmacydelete}