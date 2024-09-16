import jwt from "jsonwebtoken";
import buyer from "../../models/buyers/buyerModel.js";

export const registerBuyer = async (req,res) => {
    try {
        const {name, address, email, password} = req.body;

        const newBuyer = new buyer({name, address, email, password})
        await newBuyer.save();

        return res.status(200).json(newBuyer)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const loginBuyer = async (req,res) => {
    try {
        const {email, password} = req.body;

        const user = await buyer.findOne({email});
        if(!user){
            return res.status(400).json("Invalid email")
        }

        if(user.password !== password){
            return res.status(400).json("Invalid password")
        }

        const token = jwt.sign({id : user._id, email : user.email}, process.env.SECRET_KEY, {expiresIn : "1h"})

        return res.status(200).json({token})



    } catch (error) {
        return res.status(500).json(error)
    }
}