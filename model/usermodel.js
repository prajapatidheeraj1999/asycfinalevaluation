
const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
email :String,
gender:String,
password :String,
age :Number,
city:String,
is_married:Boolean,

})

const usermodel=mongoose.model("users",userschema)

module.exports={usermodel}