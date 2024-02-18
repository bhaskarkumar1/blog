const express=require("express")
const app=express()
const blogRoutes=require("./routes/blogRoutes")
const userRoutes=require("./routes/userRoutes")
const connectDb= require("./config/dbConnect")
const port=process.env.PORT ||4000




const verifyToken=require("./middleWare/authMiddleWare")
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json({"status":res.statusCode})
})

app.use("/api/blog",verifyToken,blogRoutes)

app.use("/api/auth",userRoutes)


// app.listen(port,()=>{
//     console.log("Server has been started on port : ",port)
// })
connectDb
  .then(() => {
    app.listen(port, () => {
      console.log("Listening for requests");
    });
  })
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });