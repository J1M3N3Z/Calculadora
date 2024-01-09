import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
 const [result, setResult] = useState(0);
 const [expression, setExpression] = useState('');

 const handleClick = (buttonValue) => {
  const lastChar = expression.slice(-1);

  if (buttonValue === '=') {
    if (!isNaN(lastChar)) {
      try {
        const evalFunction = new Function('return ' + expression);
        setResult(evalFunction());
        setExpression('');
      } catch (error) {
        setResult('Error');
      }
    }
    } else if (buttonValue === 'C') {
      setResult(0);
      setExpression('');
    } else {
      if (!isNaN(lastChar) || (!isNaN(buttonValue) && expression !== '')) {
        setExpression(expression + buttonValue);
      }   
    }
 };

 const buttonStyle = {
  backgroundColor: 'red',
  color: 'white',
};

 return (
    <div className="calculator">
      <input
        type="text"
        className="calculator-screen"
        value={expression === '' ? result : expression}
        readOnly
      />
      <div className="calculator-buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('C')} style={buttonStyle}>C</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('+')}>+</button>
      </div>
    </div>
 );
};

export default Calculator;