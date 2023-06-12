

const express=require("express")
const {blocklistmodel}=require("../model/blocklist")
const blockRoute=express.Router()

blockRoute.post("/",async(req,res)=>{
    let token=req.headers.authorization

    try{
        let postdata=await blocklistmodel({token})
        await postdata.save()
        res.send({"mas":"uer logout successfull"})


    }catch(error)
    {
        res.send({"error":error})
    }
   

})

module.exports={blockRoute}