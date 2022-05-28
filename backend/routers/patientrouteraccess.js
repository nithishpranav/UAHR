const express = require('express')
const router= express.Router()
const {createpatient,getpatient,updatepatient,}=require('../controllers/patientcontroller')

router.post('/register',createpatient)
router.get('/get/:id',getpatient)
router.put('/update/:id',updatepatient)

module.exports=router