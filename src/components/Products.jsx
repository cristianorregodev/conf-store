import React from 'react';
import { Product } from './Product';
export const Products = ({ products }) => {
  return (
    <section className="products">
      <div className="products-items">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
