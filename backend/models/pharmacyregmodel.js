const mongoose=require('mongoose')

const pharmacyregistrationschema=mongoose.Schema({
    pharmacylicense:String,
    pharmacyname:String,
    pharmacyphone:String,
    email:String,
    password:String,
})

module.exports=mongoose.model('pharmacyregistration',pharmacyregistrationschema)

