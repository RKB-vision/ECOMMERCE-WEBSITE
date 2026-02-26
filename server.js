const express=require("express")
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const productRouter = require("./src/routes/productRoutes");
const AuthRouter=require("./src/routes/AuthRoutes")
const orderRouter=require("./src/routes/orderRoutes")
const app=express();


app.use(express.static("public"))
app.use(express.json())

const MongoDB_URL=process.env.MongoDB_URL
mongoose.connect(MongoDB_URL)
    .then(()=>{
    console.log("Database connection successfull")

    app.use("/api/products",productRouter)
    app.use("/api/auth",AuthRouter)
    app.use("/api/orders",orderRouter)
    app.listen(3000,()=>{
        console.log("Server running on port http://localhost:3000/")
    })
})
    .catch((error)=>{
        console.log("Connection with DB failed!!!",error)
    })



