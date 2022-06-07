const express=require('express')
const router=express.Router()

const{createdoctor,doctorlogin,doctorget,doctorupdate,doctordelete,doctorupdatevaccine,doctorgetvaccine,addprescription,doctorgetprescription,deleteprescription}=require('../controllers/doctorcontroller')
const{protectdoctor}=require('../middleware/authmiddleware_doctor')

router.post('/register',createdoctor)
router.post('/login',doctorlogin)
router.get('/get_doctor',protectdoctor,doctorget)
router.put('/update/:id',doctorupdate)
router.get('/delete/:id',doctordelete)
router.post('/update/vaccine',doctorupdatevaccine)
router.get('/get/vaccine',doctorgetvaccine)
router.post('/update/prescription',addprescription)
router.get('/get/prescription',doctorgetprescription)
router.post('/delete/prescription',deleteprescription)


module.exports=router