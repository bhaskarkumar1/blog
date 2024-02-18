const mongoose=require("mongoose")
const { Schema } = mongoose;

const blogSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    }
})


const Blog=mongoose.model("Blog",blogSchema)

module.exports=Blog