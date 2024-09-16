import seller from "../../models/sellers/sellerModel.js";
import jwt from "jsonwebtoken"

export const registerSeller = async (req,res) => {
    try {
        const {name, address, email, password} = req.body;

        const newSeller = new seller({name, address, email, password})
        await newSeller.save();

        return res.status(200).json(newSeller)

    } catch (error) {
        return res.status(500).json(error)
    }
}

export const loginSeller = async (req,res) => {
    try {
        const {email, password} = req.body;

        const user = await seller.findOne({email});
        if(!user){
            return res.status(400).json("Invalid email")
        }

        if(user.password !== password){
            return res.status(400).json("Invalid password")
        }

        const token = jwt.sign({id : user._id , email : user.email}, process.env.SECRET_KEY, {expiresIn : "1h"});

        return res.status(200).json({token})



    } catch (error) {
        return res.status(500).json(error)
    }
}