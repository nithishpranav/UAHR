const express = require('express')
const router= express.Router()
const {createpatient,loginpatient,getpatient,updatepatient,}=require('../controllers/patientcontroller')

router.post('/register',createpatient)
router.post('/login',loginpatient)
router.get('/get/:id',getpatient)
router.put('/update/:id',updatepatient)

module.exports=router