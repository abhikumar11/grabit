import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./styles/homeproduct.css";
const HomeProduct = () => {
     const [items, setItems] = useState([]);

     useEffect(() => {

          const fetchData =async()=>{
               const res=await fetch("http://localhost:3001/api/product/getall");
               const data=await res.json();
               setItems(data);
          }
          fetchData();
          
     }, []);
     console.log("items",items);
     return (
          <div className="category-section">
               <div className="category-header">
                    {items.length > 0 && <h2>{items[0].categoryid?.name}</h2>}
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
