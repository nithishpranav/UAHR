const mongoose=require('mongoose')
const database= async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(mongoose.connection.host)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports=database