import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button';
import AppContext from '../context/AppContext';

export const Payment = () => {
  const navigate = useNavigate();
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      'ARG2NykBkvneGaJuWzNHfJraW1m7T-qdX8v7FJp4ZO73V6e7LxUqVuge54K1w4Pbe4kW8M8O4zShJyhX',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  };

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className="payment">
      <div className="payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item) => (
          <div className="payment-item" key={item.title}>
            <div className="payment-element">
              <h4>{item.title}</h4>
              <span>$ {item.price}</span>
            </div>
          </div>
        ))}
        <div className="payment-item">
          <div className="payment-element">
            <h4>Total</h4>
            <span>$ {handleSumTotal()}</span>
          </div>
        </div>
        <div className="payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={(data) => handlePaymentSuccess(data)}
            onPaymentError={(error) => console.log(error)}
            onPaymentCancel={(data) => console.log(data)}
          />
        </div>
      </div>
      {/* TODO: Sidebar */}
    </div>
  );
};
