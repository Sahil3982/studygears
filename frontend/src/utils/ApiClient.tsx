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
      <h2 className="text-2xl font- bold text-center mb-6">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product:any) => (
          <div key={product} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
           
            <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-lg font-bold text-green-600">
                ${product.price - (product.price * product.discount) / 100}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-red-500 line-through">${product.price}</span>
              )}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500 text-sm font-bold">⭐ {product.ratings.average}</span>
              <span className="text-gray-500 text-sm">({product.ratings.count} reviews)</span>
            </div>
            <button
              className={`mt-4 w-full py-2 rounded-md text-white font-bold ${
                product.availability ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
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
