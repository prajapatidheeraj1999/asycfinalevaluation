

const express=require("express")
const {postmodel}=require("../model/postmodel")
const postRoute=express.Router()

postRoute.get("/",async(req,res)=>{
    let data=req.body
    let {device}=req.query
    console.log(data,"device",device)

    try{
        if(device)
        {
            let finddata=await postmodel.find({userID:data.userID,device})
        res.send({"mas":"get succefull",finddata})

        }else{
            let finddata=await postmodel.find({userID:data.userID})
            res.send({"mas":"get succefull",finddata})
        }
        

    }catch(error)
    {
        res.send({"error":error})
    }

})
postRoute.post("/add",async(req,res)=>{
    let data=req.body

    try{
        let postdata=await postmodel(data)
        await postdata.save()
        res.send({"mas":"data has been posted",postdata})

    }catch(error)
    {
        res.send({"error":"something is wrong"})

    }


    
})
postRoute.patch("/update/:id",async(req,res)=>{
    let data=req.body
    let {id}=req.params

    try{
        let finddata=await postmodel.findOne({_id:id})
        if(finddata)
        {
            if(finddata.userID==data.userID)
            {
                let updatedata=await postmodel.findByIdAndUpdate({_id:id},data)
                res.send({"mas":"data has been updated"})
            }else{
                res.send({"mas":"id is missing"})
            }
        }else{
            res.send({"mas":"user not  found"})
        }


    }catch(error)
    {
        res.send({"error":"something is wrong"})
    }
    
})

postRoute.delete("/delete/:id",async(req,res)=>{
   let data=req.body
    let {id}=req.params

    try{
        let finddata=await postmodel.findOne({_id:id})
        console.log(finddata)
        if(finddata)
        {
            console.log("i am one step inside")
            console.log(finddata.userID,data.userID)
            if(finddata.userID==data.userID)
            {
                console.log("i am inside")
                let updatedata=await postmodel.findByIdAndDelete({_id:id})
                res.send({"mas":"data has been delete"})
            }else{
                res.send({"mas":"id is missing"})
            }
        }else{
            res.send({"mas":"user not  found"})
        }


    }catch(error)
    {
        res.send({"error":"something is wrong"})
    }
    
})

postRoute.get("/top",async(req,res)=>{  
    let datas=req.body 
    console.log(datas)                                       

    try{
        

        let data=await postmodel.find({userID:datas.userID}).limit(3).sort({no_of_comments:-1})
        res.send(data)

    }catch(error)
    {
        res.send({"error":error})
        
    }
    
})

module.exports={postRoute}