import React from 'react';
import Product from './Product/product';


const Products = () => {
  return (
    <div className = 'products'>

      {/* FIRST ROW */}
      <Product />
      <Product />
      <Product />

    </div>
  )
}

export default Products;