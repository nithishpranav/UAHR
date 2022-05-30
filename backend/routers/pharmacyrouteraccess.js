const express=require('express')
const router=express.Router()
const {createpharmacy,loginpharmacy,pharmacyupdate,pharmacydelete}=require('../controllers/pharmacycontroller')

router.post('/register',createpharmacy)
router.post('/login',loginpharmacy)
router.put('/update/:id',pharmacyupdate)
router.delete('/delete/:id',pharmacydelete)

module.exports=router