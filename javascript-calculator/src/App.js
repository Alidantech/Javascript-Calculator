import React, { useState } from 'react';
import './App.css';
import { Parser } from 'expr-eval'; 
const App = () => {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');

  const handleNumberClick = (number) => {
    if (display === '0' || display === 'Error') {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
    setExpression(expression + number);
  };

const handleOperatorClick = (operator) => {
  if (expression === '') {
    // Ignore operator if expression is empty
    if (operator === '-') {
      // Allow minus sign as part of the expression
      setDisplay(operator);
      setExpression(operator);
    }
    return;
  }

  const lastCharacter = expression.slice(-1);
  const secondLastCharacter = expression.slice(-2, -1);
  const operators = ['+', '-', '*', '/'];

  if (operator === '-' && lastCharacter === '-') {
    // Handle consecutive negative signs
    const newExpression = expression.slice(0, -1) + '+';
    setDisplay(newExpression);
    setExpression(newExpression);
  } else if (operators.includes(lastCharacter) && operators.includes(secondLastCharacter)) {
    // Remove the last two operators from the expression and add the new operator
    const newExpression = expression.slice(0, -2) + operator;
    setDisplay(newExpression);
    setExpression(newExpression);
  } else if (operators.includes(lastCharacter) && operator !== '-') {
    // Remove the last operator from the expression and add the new operator
    const newExpression = expression.slice(0, -1) + operator;
    setDisplay(newExpression);
    setExpression(newExpression);
  } else if (operators.includes(lastCharacter) && operator === '-') {
    // Evaluate the expression so far and add the new operator
    const newExpression = expression + operator;
    setDisplay(newExpression);
    setExpression(newExpression);
  } else {
    setDisplay(expression + operator);
    setExpression(expression + operator);
  }
};


  const handleDecimalClick = () => {
  // Check if there is already a decimal in the current number
  const lastNumber = expression.split(/[-+*/]/).pop();
  if (!lastNumber.includes('.')) {
    // Add the decimal to the display and expression
    setDisplay(display + '.');
    setExpression(expression + '.');
  }
};

  const handleClearClick = () => {
    setDisplay('0');
    setExpression('');
  };

  const handleEqualsClick = () => {
  if (
    expression === '' ||
    expression.endsWith('+') ||
    expression.endsWith('-') ||
    expression.endsWith('*') ||
    expression.endsWith('/')
  ) {
    return;
  }

  let result;
  try {
    const parser = new Parser();
    const expr = parser.parse(expression);
    result = expr.evaluate();
    if (result === Infinity || isNaN(result)) {
      throw new Error('Error');
    }
    result = Number(result.toFixed(4));
  } catch (error) {
    result = 'Error';
  }
  setDisplay(result.toString());
  setExpression(result.toString());
};


  return (
  <div className="container d-flex align-items-center justify-content-center">
    <div id="calculator" className="text-center">
      <div id="display">{display}</div>
      <div className="row">
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="clear" onClick={handleClearClick}>
            AC
          </button>
        </div>
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="divide" onClick={() => handleOperatorClick('/')}>
            /
          </button>
        </div>
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="multiply" onClick={() => handleOperatorClick('*')}>
            *
          </button>
        </div>
       
      
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="add" onClick={() => handleOperatorClick('+')}>
            +
          </button>
        </div>
      </div>
      <div className="row">
      <div className="col">
            <button className="btn btn-secondary btn-lg" id="nine" onClick={() => handleNumberClick('9')}>
            9
            </button>
      </div>
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="eight" onClick={() => handleNumberClick('8')}>
            8
          </button>
        </div>
         <div className="col">
          <button className="btn btn-secondary btn-lg" id="seven" onClick={() => handleNumberClick('7')}>
            7
          </button>
        </div>
        
         <div className="col">
          <button className="btn btn-secondary btn-lg" id="subtract" onClick={() => handleOperatorClick('-')}>
            -
          </button>
        </div>
      </div>
      <div className="row">

      <div className="col">
          <button className="btn btn-secondary btn-lg" id="six" onClick={() => handleNumberClick('6')}>
            6
          </button>
        </div>
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="five" onClick={() => handleNumberClick('5')}>
            5
          </button>
        </div>
        
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="four" onClick={() => handleNumberClick('4')}>
            4
          </button>
        </div>
         <div className="col">
          <button className="btn btn-secondary btn-lg" id="decimal" onClick={handleDecimalClick}>
            .
          </button>
        </div>
      </div>
      <div className="row">
      <div className="col">
          <button className="btn btn-secondary btn-lg" id="three" onClick={() => handleNumberClick('3')}>
            3
          </button>
        </div>
       
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="two" onClick={() => handleNumberClick('2')}>
            2
          </button>
        </div>
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="one" onClick={() => handleNumberClick('1')}>
            1
          </button>
        </div>
        
        <div className="col">
          <button className="btn btn-secondary btn-lg" id="zero" onClick={() => handleNumberClick('0')}>
            0
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary btn-lg" id="equals" onClick={handleEqualsClick}>
            =
          </button>
        </div>
      </div>
    </div>
  </div>
);

};

export default App;
