const express=require('express')
const router=express.Router()

const{doctorregistration,doctorlogin,doctorupdate,doctordelete}=require('../controllers/doctorcontroller')


router.post('/register',doctorregistration)
router.post('/login',doctorlogin)
router.put('/update/:id',doctorupdate)
router.get('/delete/:id',doctordelete)

module.exports=router