
const express=require("express")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const {usermodel}=require("../model/usermodel")

const userModels=express.Router()

userModels.post("/register",async(req,res)=>{
let {name,email,password,gender,age,city,is_married}=req.body

   try{
    let data= await usermodel.findOne({email})
    if(data)
    {
        res.send({"mas":"User already exist, please login"})
    }else{
        bcrypt.hash(password, 5, async(err, hash)=>{
            if(hash)
            {
                let add=await usermodel({name,email,password:hash,gender,age,city,is_married})
                await add.save()
                res.send({"mas":"user register succesfully",add})

            }
            // Store hash in your password DB.
        })
    }

   }catch(error)
   {
    res.send({"error":error})

   }


})
userModels.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try{
        let data=await usermodel.findOne({email})
        if(data){
           console.log(password,data)
            bcrypt.compare(password, data.password, async(err, result)=>{
                //console.log(result)

                if(result)
                {
                    const token =jwt.sign({username:data.name,userID:data._id},'dheeraj')
                    res.send({"mas":"login succesfull !!",token})
                }else{
                    res.send({"mas":"password is worg"})
                }
                // result == false
            })

        }else{
            res.send({"mas":"pls login first!!"})
        }

    }catch(error){
        res.send({"mas":"pls login first"})

    }
    
})

module.exports={
    userModels
}