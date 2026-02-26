const Product=require("../models/product")

exports.findallProducts=async (req,res)=>{
    try{
        const stored_product=await Product.find()
        res.status(200).json(stored_product)
    }
    catch(error){
        res.status(500).json({message:"Error fetching products in database",error})
    }
}

exports.createProduct=async (req,res)=>{
    try{
    const new_Product=await Product.create(req.body)
        res.status(201).json({message:"Product added succesfully",new_Product})
        }
    catch(error){
        res.status(500).json({message:"Error adding product in database",error})
    }
}

exports.updateProduct=async (req,res)=>{
        try{
        const updatedProduct=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({message:"Product updated succesfully",updatedProduct}
    )}
    catch(error){
        res.status(500).json({message:"Error updating product in database",error})
    }
}



exports.deleteProduct=async (req,res)=>{
    try{
        deletedProduct=await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Product deleted succesfully",deletedProduct})
    }
    catch(error){
        res.status(500).json({message:"Error deleting product in database",error})
    }
}