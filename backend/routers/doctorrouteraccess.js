const express=require('express')
const router=express.Router()

const{createdoctor,doctorlogin,doctorget,doctorupdate,doctordelete}=require('../controllers/doctorcontroller')
const{protectdoctor}=require('../middleware/authmiddleware_doctor')

router.post('/register',createdoctor)
router.post('/login',doctorlogin)
router.get('/get_doctor',protectdoctor,doctorget)
router.put('/update/:id',doctorupdate)
router.get('/delete/:id',doctordelete)

module.exports=router