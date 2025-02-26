'use client'
import { useState } from "react";
import axios from "axios";

const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        subcategory: "",
        brand: "",
        price: "",
        discount: "",
        stock: "",
        SKU: "",
        images: "",
        specifications: {
            material: "",
            color: ""
        }
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSpecChange = (e:any) => {
        const { name, value } = e.target;
        setProduct(prev => ({
            ...prev,
            specifications: {
                ...prev.specifications,
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/addproduct", product);
            console.log("Product added successfully", response.data);
        } catch (error) {
            console.error("Error adding product", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-md">
            <input type="text" name="name" placeholder="Product Name" onChange={handleChange} required className="border p-2 w-full" />
            <textarea name="description" placeholder="Description" onChange={handleChange} required className="border p-2 w-full"></textarea>
            <input type="text" name="category" placeholder="Category" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="subcategory" placeholder="Subcategory" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="brand" placeholder="Brand" onChange={handleChange} required className="border p-2 w-full" />
            <input type="number" name="price" placeholder="Price" onChange={handleChange} required className="border p-2 w-full" />
            <input type="number" name="discount" placeholder="Discount" onChange={handleChange} className="border p-2 w-full" />
            <input type="number" name="stock" placeholder="Stock" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="SKU" placeholder="SKU" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="images" placeholder="Image URL" onChange={handleChange} required className="border p-2 w-full" />
            <input type="text" name="material" placeholder="Material" onChange={handleSpecChange} className="border p-2 w-full" />
            <input type="text" name="color" placeholder="Color" onChange={handleSpecChange} className="border p-2 w-full" />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
        </form>
    );
};

export default AddProductForm;
