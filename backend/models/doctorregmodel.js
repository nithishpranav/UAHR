const mongoose=require('mongoose')

const doctorregistrationschema=mongoose.Schema({
    doctorlicense:String,
    firstname:String,
    lastname:String,
    gender:String,
    email:String,
    password:String,
})

module.exports=mongoose.model('doctorregistration',doctorregistrationschema)