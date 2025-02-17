import Product from "../../models/productModels.js";

const addproduct = async (req, res) => {
    try {
        const {
            name,
            description,
            category,
            subcategory,
            brand,
            price,
            discount,
            stock,
            SKU,
            images,
            specifications,
        } = req.body;

        const existingProduct = await Product.findOne({ SKU });
        if (existingProduct) {
            return res.status(400).json({ message: "SKU already exists" });
        }

        const newProduct = new Product({
            name,
            description,
            category,
            subcategory,
            brand,
            price,
            discount,
            stock,
            SKU,
            images,
            specifications,
          });

          await newProduct.save();

          res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });

    }
}

export default addproduct