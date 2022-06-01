const jwt=require('jsonwebtoken')
const pharmacyregistration=require('../models/pharmacyregmodel')
const asynchandler=require('express-async-handler')

const protectpharmacy=asynchandler(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer') )
    {
        try{
        // get token

        token=req.headers.authorization.split(' ')[1]
        
        // verify token
        const decode=jwt.verify(token,process.env.JWT_SECRET)

        //get user from token

        req.pharmacy= await pharmacyregistration.findById(decode.id).select('-password')
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

module.exports={protectpharmacy}