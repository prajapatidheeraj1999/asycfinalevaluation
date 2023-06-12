
const express=require("express")
const {connect}=require("./db")
const {userModels}=require("./router/userouter")
const {postRoute}=require("./router/postroute")
const {varify}=require("./middleware/varify")
const {blockRoute}=require("./router/blocklistroute")
const app=express()
app.use(express.json())

app.use("/users",userModels)

app.use(varify)

app.use("/posts",postRoute)

app.use("/logout",blockRoute)

app.listen("8080",async()=>{

    try{
        await connect
        console.log("connection is stablsh port number 8080")

    }catch(error)
    {
        console.log("connection is not stablsh")


    }

})