const jwt=require("jsonwebtoken")
module.exports=function verify(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).json({message:"No token provided"})
    }
    const token=req.headers.authorization.split(" ")[1]
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next();
    }
    catch(error){
        res.status(401).json("Unauthorized access!!!",error)
    }
}