const User=require("../models/User")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const dotenv= require('dotenv')
dotenv.config()

const doLogin=(req,res)=>{
    const { username, password } = req.body;

    User.findOne({username}).then((result)=>{
        bcrypt.compare(password,result.password).then((passwordmatch)=>{
            if(passwordmatch){
            const token = jwt.sign({ userId: result._id }, process.env.JWT_SECRET, {
                expiresIn: '1h',
                });
            res.json({"token":token})
        }
        else{
            throw new Error("Incorrect password");

        }
        })

       

    }).catch((error)=>{
        res.send("Credentials is incorrect ")
    })
}

const doRegister=(req,res)=>{
    const{username,password}=req.body
    // console.log(username,password)
    bcrypt.hash(password,10).then((hsdpwd)=>{
        const newUSer= new User({username,password:hsdpwd})
        newUSer.save().then(()=>{
         res.send("New user created successfully")
        })
    })
.catch((error)=>{
    res.send("error creating a new user")
   })
}


module.exports={
    doLogin,
    doRegister
}