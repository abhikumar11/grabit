import React from 'react'
import  "./styles/productcard.css";
const ProductCard = ({product}) => {
  return (
    <div className="container">
      <div className="upper">
        <img src={product.productimage} alt=""/>
      </div>
      <div className="middle">
        <p>{product.name}</p>
        <p>{product.quantity}</p>
      </div>
      <div className="lower">
        <p>{product.price}</p>
        <button>Add</button>
      </div>
    </div>
  )
}

export default ProductCard