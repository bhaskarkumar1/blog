const Blog=require("../models/Blog")



const getAllBlog=(req,res)=>{
   Blog.find({}).then((result)=>{
    res.status(200).send(result)
   }).catch((error)=>{
    res.status(500).json({"error": error})
   })
    }


const getSpecificBlog=(req,res)=>{
    console.log(req.params)
    Blog.find(req.params).then((result)=>{
        res.send(result)
    }).catch((error)=>{
        res.status(500).json({"status":error})

    })
}    

const createABlog=(req,res)=>{
    // console.log(req.body)
    const newObj= new Blog(req.body)
    newObj.save().then(()=>{
        res.status(200).json({"status":"Blog saved in DB"})
    }).catch((error)=>{
        res.status(500).json({"error":error})
    })    
}

const updateABlog=(req,res)=>{
    console.log(req.params)
    Blog.findOneAndUpdate(req.params,req.body).then((result)=>{
        res.send("Update Success")
    }).catch((error)=>{
        res.send("error in updating blog")
    })
    
}

const deleteABlog=(req,res)=>{
    Blog.deleteOne(req.params).then(()=>{
        res.send("blog Has been deleted Successfully")
    }).catch((error)=>{
        res.send("error deleting blog")
    })
}


module.exports={
    getAllBlog,
    createABlog,
    getSpecificBlog,
    updateABlog,
    deleteABlog
}