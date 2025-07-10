import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import products from '../assets/ProductData'
const HomeProduct = () => {

  const[items,setItems]=useState([]);

  useEffect(()=>{
      setItems(products);
  },[])
  console.log("items",items);
  return (
    <div>
         <div>
        <h2>Product Category Name</h2>
        <a>see all</a>
        {
          items.map((p)=><ProductCard product={p}/>)
        }
        
      </div>
    </div>
  )
}

export default HomeProduct