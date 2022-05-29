const mongoose=require('mongoose')

const pharmacyregistrationschema=mongoose.Schema({
    pharmacylicense:String,
    pharmacyname:String,
    pharmacyphone:String,
    pharmacyemail:String,
    pharmacypassword:String,
})

module.exports=mongoose.model('pharmacyregistration',pharmacyregistrationschema)

