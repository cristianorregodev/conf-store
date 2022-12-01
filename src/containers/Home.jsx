import React from 'react';
import initialState from '../initialState';
import { Products } from '../components/Products';
import { Banner } from '../components/Banner';
export const Home = () => {
  return (
    <>
      <Banner />
      <Products products={initialState.products} />
    </>
  );
};
