const mongoose=require('mongoose')

const patientregistrationschema=mongoose.Schema({
  patientid:String,
    firstname:String,
    lastname:String,
    gender:String,
    dob:String,
      email:String,
      password:String,
})
/*airedAt: {
  type: Date,
  // The dates of the first and last episodes of
  // Star Trek: The Next Generation
  min: '1987-09-28',
  max: '1994-05-23'
}*/

module.exports=mongoose.model('patientregistrationmodule',patientregistrationschema)