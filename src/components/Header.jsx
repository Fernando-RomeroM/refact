import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Header = () => {
  return (
    <header>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenido a Coquetas INC</h1>
    </header>
  );
};

export default Header;
