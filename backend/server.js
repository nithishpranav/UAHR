const express=require('express')
const dotenv=require('dotenv').config()
const database=require('./db/database')
const port = process.env.PORT || 3000

const app=express()

database()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/patients',require('./routers/patientrouters/patientrouteraccess'))

app.listen(port,(req,res)=>{
    console.log(`The server is running in ${port}`)
})