import React from 'react';
import Navigation from '../Navigation';

const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default PrimaryLayout;
