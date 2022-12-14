import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../context/AppContext';

export const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  const handleRemove = (product) => () => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <section className="checkout">
      <div className="checkout-content">
        {cart.length > 0 ? <h3>Lista de pedidos</h3> : <h3>No hay pedidos</h3>}
        {cart.length > 0 ? null : (
          <Link to="/" className="go-back">
            <button>Ver productos</button>
          </Link>
        )}

        {cart.map((item) => (
          <div className="checkout-item" key={item.title}>
            <div className="checkout-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
            <button type="button" onClick={handleRemove(item)}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="checkout-sidebar">
          <h3>Precio total: $ {handleSumTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar</button>
          </Link>
        </div>
      )}
    </section>
  );
};
