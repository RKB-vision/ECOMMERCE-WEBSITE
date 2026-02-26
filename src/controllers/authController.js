const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt=require("jsonwebtoken")

exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;
    try{
        if (! await User.findOne({email})){
            const hashed_password=await bcrypt.hash(password,10)  
            //10 is industry standard makes password more secure

            await User.create({
                name,
                email,
                password:hashed_password,
                role
            })
            res.status(201).json("Registered Successful")
        }
        else{
            res.json("Email already registered")
        }
    }catch(error){
        res.status(500).json({mesage:"Failed to register Internal Error",error:error.mesage})
    }

}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const stored_info=await User.findOne({email})
        if (stored_info){
            const match=await bcrypt.compare(password,stored_info.password)
            if(match){

                const token = jwt.sign(
                    { userId: stored_info._id, role: stored_info.role }, // payload - what you store inside
                    process.env.JWT_SECRET,                      // secret - used to sign it
                    { expiresIn: "7d" }                     // expires in 7 days
                )

                res.status(200).json({message:"Login successfull",token,name:stored_info.name,email:stored_info.email})

            }
            else{
                res.status(401).json("Incorrect password. Please try again!!!")
            }
        }
        else{
            res.status(401).json("Email not registered")
        }
    } catch(error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}