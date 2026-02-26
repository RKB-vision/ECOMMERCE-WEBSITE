module.exports=function verify_admin(req,res,next){
    if(!req.user){
        return res.status(401).json({message:"No user data found"})
    }
        const {role}=req.user
        if (role==="admin" || role==="seller"){
        next();
        }
        else{
        res.status(403).json("Unauthorized access!!!")
    }
}