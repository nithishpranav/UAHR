const jwt=require('jsonwebtoken')
const doctorregistration=require('../models/doctorregmodel')
const asynchandler=require('express-async-handler')

const protectdoctor=asynchandler(async(req,res,next)=>{
    let token
    try{
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token=req.headers.authorization.split(' ')[1]
            const decode=jwt.decode(token,process.env.JWT_SECRET)
            req.doctor= await doctorregistration.findById(decode.id).select('-password')
            next()
        } catch (error) {
            throw new Error('un autherised')
        }
    }
}catch{
    throw new Error(e)
}
    if(!token){
        throw new Error('no autherization')
    }
    
})

module.exports={protectdoctor}