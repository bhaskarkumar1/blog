const express=require("express")
const Router=express.Router()
const {doLogin,doRegister}=require("../controllers/userController")

Router.post("/login",doLogin)

Router.post("/register",doRegister)


module.exports=Router