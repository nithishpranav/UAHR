const express = require('express')
const routes= express.Router()
const {createpatient,getpatient,updatepatient,}=require('../../controllers/patientcontroller')

routes.post('/register',createpatient)
routes.get('/get/:id',getpatient)
routes.put('/update/:id',updatepatient)

module.exports=routes