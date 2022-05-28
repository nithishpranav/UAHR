const express=require('express')
const router=express.Router()

const{doctorregistration,doctorget,doctorupdate,doctordelete}=require('../controllers/doctorcontroller')


router.post('/register',doctorregistration)
router.get('/get/:id',doctorget)
router.put('/update/:id',doctorupdate)
router.get('/delete/:id',doctordelete)

module.exports=router