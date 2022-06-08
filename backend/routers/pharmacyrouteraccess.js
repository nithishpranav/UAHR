const express=require('express')
const router=express.Router()
const {createpharmacy,loginpharmacy,pharmacyget,pharmacygetprescriptions,pharmacydelete}=require('../controllers/pharmacycontroller')
const {protectpharmacy}=require('../middleware/authmiddleware_pharmacy')


router.post('/register',createpharmacy)
router.post('/login',loginpharmacy)
router.get('/get_pharmacy',protectpharmacy,pharmacyget)
router.get('/get/prescriptions',pharmacygetprescriptions)
router.delete('/delete/:id',pharmacydelete)

module.exports=router