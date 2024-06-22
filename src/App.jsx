import React from 'react';
import './App.css';
import Header from '../components/Calculadora';
import ListaEmpleados from '../components/ListaEmpleados'; 
import Calculadora from '../components/Calculadora';
import Footer from '../components/Footer'; 

function App() {
  return (
    <div className="envoltura">
      <Header />
      <ListaEmpleados /> 
      <Calculadora /> 
      <Footer /> 
    </div>
  );
}

export default App;
