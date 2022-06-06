const mongoose= require('mongoose')
const vaccineschema=mongoose.Schema({
    patientid:String,
    vaccine:[{
        name:String,
        date:String}]

})

module.exports=mongoose.model('vaccine',vaccineschema)
