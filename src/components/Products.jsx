import React, { useContext } from 'react';
import { Product } from './Product';
import AppContext from '../context/AppContext';

export const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <section className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </section>
  );
};
