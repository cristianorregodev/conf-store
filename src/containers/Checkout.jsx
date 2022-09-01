import React from 'react';

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-content">
        <h3>Lista de pedidos</h3>
        <div className="checkout-item">
          <div className="checkout-element">
            <h4>Item name</h4>
            <span>$18</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="checkout-sidebar">
        <h3>Precio total: $18</h3>
        <button type="button">Continuar</button>
      </div>
    </div>
  );
};
