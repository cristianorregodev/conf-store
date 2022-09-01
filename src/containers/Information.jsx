import React from 'react';

export const Information = () => {
  return (
    <div className="information">
      <div className="information-content">
        <div className="information-head">
          <h2>Información de contacto</h2>
        </div>
        <div className="information-form">
          <form action="">
            <input type="text" name="name" placeholder="Nombre completo" />
            <input type="email" name="email" placeholder="Correo electrónico" />
            <input type="text" name="address" placeholder="Dirección" />
            <input type="text" name="apto" placeholder="Apto" />
            <input type="text" name="city" placeholder="Ciudad" />
            <input type="text" name="country" placeholder="País" />
            <input type="text" name="state" placeholder="Estado" />
            <input type="text" name="postalCode" placeholder="Código postal" />
            <input type="text" name="phone" placeholder="Telefono" />
          </form>
        </div>
        <div className="information-buttons">
          <div className="information-back">Regresar</div>
          <div className="information-next">Pagar</div>
        </div>
      </div>
      <div className="information-sidebar">
        <h3>Pedidos</h3>
        <div className="information-item">
          <div className="information-element">
            <h4>ITEM name</h4>
            <span>$18</span>
          </div>
        </div>
      </div>
    </div>
  );
};
