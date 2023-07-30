import React from 'react';
import Footer from './partials/FooterComp';
import Header from './partials/HeaderComp';
import '../../src/App.css';

export const DefaultLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div className='header'>
        <Header />
      </div>

      <main className='main' style={{ flex: 1 }}>
        <div className='breadcrumbs'></div>

        {children}
      </main>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
