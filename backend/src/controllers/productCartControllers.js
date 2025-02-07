import productModels from "../models/productModels.js";

const productCartControllers = async (req, res) => {

    console.log(req.params.id);
    

    try {
        const product = await productModels.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Invalid Product ID' });
    }

}

export default productCartControllers;