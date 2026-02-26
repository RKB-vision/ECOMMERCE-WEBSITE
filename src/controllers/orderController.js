const Order=require("../models/Order")

exports.place_order=async (req,res)=>{
    try{
    const {items,total}=req.body
    const {userId}=req.user
    await Order.create({user:userId,items,total})
    res.status(201).json({message:"Order created"})
    }catch(error){
        res.status(500).json({message:"Internal error",error})
    }
}

exports.check_orders=async (req,res)=>{
    try{
    const {userId}=req.user
    res.status(200).json(await Order.find({user:userId}))
}catch(error){
    res.status(500).json({message:"Error while checking order from DB",error})
}
}

exports.check_1order=async (req,res)=>{
    try{
    const {userId}=req.user
    const id=req.params.id
    user_data=await Order.findOne({user:userId,_id:id})

    // if(!user_data){
    //     return res.status(200).json({message:"No order history"})
    // }
    res.status(200).json(user_data)}
    catch(error){
        res.status(500).json({message:"Error while checking  order",error})
    }
}