const jwt=require('jsonwebtoken')
const patientregistration=require('../models/patientregmodel')
const asynchandler=require('express-async-handler')

const protectpatient=asynchandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') )
    {
        try{
        // get token

        token=req.headers.authorization.split(' ')[1]
        
        // verify token
        const decode=jwt.verify(token,process.env.JWT_SECRET)

        //get user from token

        req.patient= await patientregistration.findById(decode.id).select('-password')
        next()
        } catch (error)
        {
            throw new Error('not authorized')
        }

    }
    if(!token)
    {
        throw new Error('not authorized')
    }
})

module.exports={protectpatient,}