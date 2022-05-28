
const doctorregistration=(req,res)=>{
    res.json({
        message:'doctor registration is working'
    })
}

const doctorget=(req,res)=>{
    res.json({
        message:'doctor login is working'
    })
}

const doctorupdate=(req,res)=>{
    res.json({
        message:'doctor update is working'
    })
}

const doctordelete=(req,res)=>{
    res.json({
        message:'doctor delete is working'
    })
}
module.exports={doctorregistration,doctorget,doctorupdate,doctordelete}