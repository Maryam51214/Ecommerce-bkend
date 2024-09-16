import Product from "../../models/sellers/ProductModel.js";

export const getAllProducts = async (req,res) => {
    try {
        const products = await Product.find();
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const getProductDetail = async (req,res) => {
    try {
        const {id} = req.params;

        const product = await Product.findById(id);
        if(!product){
            return res.status(400).json("Product not found")
        }

        return res.status(200).json(product)
    } catch (error) {
        return res.status(500).json(error)
    }
}