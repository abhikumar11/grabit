import React from 'react'
import "./styles/productcard.css";
const ProductCard = ({ product }) => {
  return (
    <div className="container">
      <div className="upper">
        <img src={product.productimage} alt="" />
      </div>
      <div className="middle">
        <p>{product.name.length > 32 ? product.name.substring(0, 33) + "..." : product.name}</p>
        <p>{product.quantity}</p>
      </div>
      <div className="lower">
        <p>&#8377;{product.price}</p>
        <button>ADD</button>
      </div>
    </div>
  )
}

export default ProductCard