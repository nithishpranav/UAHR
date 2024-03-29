const mongoose= require('mongoose')
const prescriptionschema=mongoose.Schema({
    prescriptionid:String,
    patientid:String,
    doctorlicense:String,
    prescription:[
        {
            name:String,
            dosage:String,
            timing:String,
            datefrom:String,
            dateto:String,
        }
    ]

})


module.exports=mongoose.model('prescription',prescriptionschema)
