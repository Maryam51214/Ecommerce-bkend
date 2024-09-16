import Product from "../../models/sellers/ProductModel.js";

// Add Product controller
export const addProduct = async (req, res) => {
  try {
    const { title, description, price, category, img } = req.body;

    // Validate required fields
    if (!title || !description || !price || !category || !img) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new product
    const product = new Product({
      title,
      description,
      price,
      category,
      img
    });

    // Save product to the database
    await product.save();

    // Return success response
    return res.status(200).json({
      message: "Product added successfully",
      product
    });

  } catch (error) {
    // Return error response
    return res.status(500).json({
      message: "An error occurred while adding the product",
      error: error.message // Provide the error message for better debugging
    });
  }
};



// import Product from "../../models/sellers/ProductModel.js";



// export const addProduct = async (req,res) => {
//     try {
//         const {title, description, price, category, img} = req.body;

//         const product = new Product({title, description, price, category, img});
//         await product.save();
//         return res.status(200).json(product)
//     } catch (error) {
//         return res.status(500).json(error)
//     }
// }