'use client'
import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/product");
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center mt-10 text-xl">Loading...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div 
            key={product.id} 
            className="border rounded-lg p-5 shadow-lg hover:shadow-2xl transition duration-300 bg-white"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-bold text-green-600">
                ${product.price - (product.price * product.discount) / 100}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-red-500 line-through">${product.price}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-yellow-500 text-sm font-bold">⭐ {product.ratings.average}</span>
              <span className="text-gray-500 text-sm">({product.ratings.count} reviews)</span>
            </div>
            <button
              className={`mt-5 w-full py-3 rounded-md text-white font-bold text-lg transition duration-300 ${
                product.availability 
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!product.availability}
            >
              {product.availability ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;