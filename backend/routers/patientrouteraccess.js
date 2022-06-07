const express = require('express')
const router= express.Router()
const {createpatient,loginpatient,getpatient,patientgetvaccine,patientgetprescription,updatepatient,}=require('../controllers/patientcontroller')
const {protectpatient}=require('../middleware/authmiddleware_patient')


router.post('/register',createpatient)
router.post('/login',loginpatient)
router.get('/get',protectpatient,getpatient)
router.get('/get/vaccine',patientgetvaccine)
router.get('/get/prescriptions',patientgetprescription)
router.put('/update/:id',updatepatient)

module.exports=router