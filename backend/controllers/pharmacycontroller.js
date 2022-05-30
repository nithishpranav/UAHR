const asynchandler=require('express-async-handler')
const pharmacyregistration=require('../models/pharmacyregmodel')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')

//create pharmacy
//route post:pharmacy/register

const createpharmacy=asynchandler(async (req,res)=>{
var{pharmacylicense,pharmacyname,pharmacyphone,pharmacyemail,pharmacypassword}=req.body

//finding duplicates

const pharmacyexists=await pharmacyregistration.findOne({pharmacyemail})

if(pharmacyexists){
    throw new Error('pharmacy already exists')
}

//hash password

const salt=await bcrypt.genSalt(10)
const hashedpassword=await bcrypt.hash(pharmacypassword,salt)

//create pharmacy
const newpharmacy=await pharmacyregistration.create({
    pharmacylicense,pharmacyname,pharmacyphone,
    pharmacyemail,pharmacypassword:hashedpassword
})
//display created daya
res.json({
    pharmacylicense,pharmacyname,pharmacyphone,pharmacyemail
})

})
//
const loginpharmacy=(req,res)=>{
res.json({
    message:'pharmist login working'
})
}
const pharmacyupdate=()=>{
    res.json({
        message:'pharmist update'
    })
}
const pharmacydelete=()=>{
    res.json({
        message:'delete working'
    })
}

module.exports={createpharmacy,loginpharmacy,pharmacyupdate,pharmacydelete}