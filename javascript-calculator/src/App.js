import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0' && number === '0') return; // Prevent leading zeros
    setDisplay((prevDisplay) => (prevDisplay === '0' ? number : prevDisplay + number));
  };

  const handleOperatorClick = (operator) => {
    if (expression.slice(-1) === '-' && operator === '-') return; // Allow negative numbers
    if (expression.slice(-1).match(/[+\-*/]/)) {
      // Replace previous operator with the new one
      setExpression((prevExpression) => prevExpression.slice(0, -1) + operator);
    } else {
      setExpression((prevExpression) => prevExpression + display + operator);
    }
    setDisplay('0');
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay((prevDisplay) => prevDisplay + '.');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleEqualsClick = () => {
    const result = eval(expression + display).toFixed(4);
    setDisplay(result);
    setExpression(result);
  };

  return (
    <div className="calculator">
      <div id="display" className="calculator-display">
        {display}
      </div>
      <div className="calculator-buttons">
        <div className="row">
          <button id="clear" className="button" onClick={handleClearClick}>
            AC
          </button>
          <button id="divide" className="button" onClick={() => handleOperatorClick('/')}>
            /
          </button>
          <button id="multiply" className="button" onClick={() => handleOperatorClick('*')}>
            *
          </button>
        </div>
        <div className="row">
          <button id="seven" className="button" onClick={() => handleNumberClick('7')}>
            7
          </button>
          <button id="eight" className="button" onClick={() => handleNumberClick('8')}>
            8
          </button>
          <button id="nine" className="button" onClick={() => handleNumberClick('9')}>
            9
          </button>
          <button id="subtract" className="button" onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
        <div className="row">
          <button id="four" className="button" onClick={() => handleNumberClick('4')}>
            4
          </button>
          <button id="five" className="button" onClick={() => handleNumberClick('5')}>
            5
          </button>
          <button id="six" className="button" onClick={() => handleNumberClick('6')}>
            6
          </button>
          <button id="add" className="button" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
        <div className="row">
          <button id="one" className="button" onClick={() => handleNumberClick('1')}>
            1
          </button>
          <button id="two" className="button" onClick={() => handleNumberClick('2')}>
            2
          </button>
          <button id="three" className="button" onClick={() => handleNumberClick('3')}>
            3
          </button>
        </div>
        <div className="row">
          <button id="zero" className="button" onClick={() => handleNumberClick('0')}>
            0
          </button>
          <button id="decimal" className="button" onClick={handleDecimalClick}>
            .
          </button>
          <button id="equals" className="button" onClick={handleEqualsClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
