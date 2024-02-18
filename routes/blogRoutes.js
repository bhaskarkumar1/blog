const express=require("express")
const { getAllBlog,getSpecificBlog,createABlog,updateABlog,deleteABlog } = require("../controllers/blogController")
const Router=express.Router()




Router.get("/",getAllBlog)
Router.get("/:title",getSpecificBlog)


Router.post("/",createABlog)
Router.put("/:_id",updateABlog)

Router.delete("/:_id",deleteABlog)

module.exports=Router