const express=require('express')
const router=express.Router()
const {createpharmacy,pharmacyget,pharmacyupdate,pharmacydelete}=require('../controllers/pharmacycontroller')

router.post('/register',createpharmacy)
router.get('/get/:id',pharmacyget)
router.put('/update/:id',pharmacyupdate)
router.delete('/delete/:id',pharmacydelete)

module.exports=router