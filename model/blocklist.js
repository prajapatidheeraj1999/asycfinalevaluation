
const mongoose=require("mongoose")

const blocklistschema=mongoose.Schema({
    token:String,
   
})

const blocklistmodel=mongoose.model("blocklist",blocklistschema)

module.exports={blocklistmodel}