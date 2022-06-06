const mongoose= require('mongoose')
const vaccineschema=mongoose.schema({
    patient_id:String,
    vaccine:[{
        vaccine_name:String,
        vaccinated_date:String}]

})

module.exports=mongoose.model('vaccine',vaccineschema)
