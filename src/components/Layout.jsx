import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
  return (
    <div className="main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
