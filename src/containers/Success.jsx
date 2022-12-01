import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Map } from '../components/Map';
import useAddress from '../hooks/useAddress';
import { Link } from 'react-router-dom';

export const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const address = buyer[0].city + ' ' + buyer[0].state;
  const location = useAddress(address);
  return (
    <div className="success">
      <div className="success-content">
        <h2>{`${buyer[0].name}, gracias por tu compra.`}</h2>
        <span>
          Pronto nos pondremos en contacto contigo para enviar tu pedido a tu
          dirección
        </span>
        <div className="success-map">
          {Object.keys(location).length > 0 ? (
            <Map data={location} />
          ) : (
            <h1>Cargando...</h1>
          )}
        </div>
        <Link to="/" className="go-back">
          Volver a la tienda
        </Link>
      </div>
    </div>
  );
};
