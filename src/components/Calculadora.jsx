 import React, { useState } from 'react';

const Calculadora = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const suma = () => setResult(num1 + num2);
  const resta = () => setResult(num1 - num2);
  const multiplicacion = () => setResult(num1 * num2);
  const division = () => setResult(num2 !== 0 ? num1 / num2 : 'Error');

  return (
    <div>
      <h2>Calculadora</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(parseFloat(e.target.value))} />
      <input type="number" value={num2} onChange={(e) => setNum2(parseFloat(e.target.value))} />
      <div>
        <button onClick={suma}>Sumar</button>
        <button onClick={resta}>Restar</button>
        <button onClick={multiplicacion}>Multiplicar</button>
        <button onClick={division}>Dividir</button>
      </div>
      {result !== null && <p>Resultado: {result}</p>}
    </div>
  );
};

export default Calculadora;
