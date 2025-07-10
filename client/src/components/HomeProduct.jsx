import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import products from "../assets/ProductData";
import "./styles/homeproduct.css";
const HomeProduct = () => {
     const [items, setItems] = useState([]);

     useEffect(() => {
          setItems(products);
     }, []);
     console.log("items", items);
     return (
          <div className="category-section">
               <div className="category-header">
                    <h2>Product Category Name</h2>
                    <a href="#">See All</a>
               </div>

               <div className="product-list">
                    {items.map((p) => (
                         <ProductCard product={p} />
                    ))}
               </div>
          </div>
     );
};

export default HomeProduct;
