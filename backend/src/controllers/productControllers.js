// src/controllers/productControllers.js
import productModels from "../models/productModels.js";


// Controller Function
const getAllProducts = async (req, res) => {
  try {
    const products = await productModels.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

export default getAllProducts; // ✅ Default Export





// GET Product by ID
// exports.getProductById = async (req, res) => {
//   try {
//     const product = await productModels.findById(req.params.id);
//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Invalid Product ID' });
//   }
// };

// // POST Create Product
// exports.createProduct = async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (err) {
//     res.status(400).json({ error: 'Failed to create product' });
//   }
// };

// // PUT Update Product
// exports.updateProduct = async (req, res) => {
//   try {
//     const updatedProduct = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       { new: true }
//     );
//     if (updatedProduct) {
//       res.json(updatedProduct);
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to update product' });
//   }
// };

// // DELETE Product
// exports.deleteProduct = async (req, res) => {
//   try {
//     const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//     if (deletedProduct) {
//       res.json({ message: 'Product deleted successfully' });
//     } else {
//       res.status(404).json({ message: 'Product not found' });
//     }
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to delete product' });
//   }
// };
