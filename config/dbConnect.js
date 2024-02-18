const mongoose=require("mongoose")
const dotenv= require('dotenv')
dotenv.config()

const connectDb=mongoose.connect(process.env.MONGO_URL).then((result)=>{
    console.log("success connecting to DB")
}).catch((error)=>{
    console.log("Error connecting to Database")
})

module.exports=connectDb