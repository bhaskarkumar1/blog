const jwt=require("jsonwebtoken")
const dotenv= require('dotenv')
dotenv.config()



function verifyToken(req,res,next){
    const token=req.header("Authorization")
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    // res.send("decode:",decoded)
    // next()
    if(decoded){
        next()
    }
}


module.exports=verifyToken