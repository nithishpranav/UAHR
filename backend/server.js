const express=require('express')
const dotenv=require('dotenv').config()
const database=require('./db/database')
const port = process.env.PORT || 3000

const app=express()

database()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/patient',require('./routers/patientrouteraccess'))
app.use('/api/doctor',require('./routers/doctorrouteraccess'))
app.use('/api/pharmacy',require('./routers/pharmacyrouteraccess'))

app.listen(port,(req,res)=>{
    console.log(`The server is running in ${port}`)
})