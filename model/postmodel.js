
const mongoose=require("mongoose")

const postschema=mongoose.Schema({
    title :String,
    body: String,
    device:String,
    no_of_comments:Number,
    username:String,
    userID:String
})

const postmodel=mongoose.model("post",postschema)

module.exports={postmodel}