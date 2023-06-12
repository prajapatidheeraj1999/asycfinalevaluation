const jwt = require('jsonwebtoken')
const {blockRoute}=require("../router/blocklistroute")
async function varify(req,res,next){
    let token=req.headers.authorization

    try{
        if(token)
        {
            // let bocklist=await blockRoute.find({token})
            // console.log(bocklist)
            console.log(token)
            jwt.verify(token, 'dheeraj', async(err, decoded)=> {

                if(decoded)
                {
                    req.body.username=decoded.username
                    req.body.userID=decoded.userID
                    next()

                }
                
              })
        }else{
            res.send({"mas":"pls login first"})
        }

    }catch(error)
    {
        res.send({"mas":"pls login first"})
    }



}
module.exports={varify}