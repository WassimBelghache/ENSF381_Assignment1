import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="product-item" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
      <img className='product-img' src={product.image} alt={product.name} />
      <p className='product-name'>{product.name}</p>
      <p className='product-price'>Price: ${product.price}</p>
      <button className="product-button" onClick={() => onAddToCart(product)}>Add to Cart</button>
      {showDescription && <p className='product-description'>{product.description}</p>}
    </div>
  );
};

export default ProductItem;