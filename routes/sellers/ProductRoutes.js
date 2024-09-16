import express from "express";
import { addProduct } from "../../controllers/sellers/ProductController.js";
import { getAllProducts } from "../../controllers/buyers/buyerProductCotroller.js";
// import { getProductDetail } from '../../controllers/productController.js'; // Adjust the path based on your project structure

const productRouter = express.Router();


productRouter.post("/add-product", addProduct);
productRouter.get("/get-all", getAllProducts);
const getProductDetail = (req, res) => {
    const productId = req.params.id;
    // Fetch product detail logic goes here...
    res.json({ message: `Product details for product id: ${productId}` });
  };
productRouter.get("/product-detail/:id", getProductDetail);

export default productRouter