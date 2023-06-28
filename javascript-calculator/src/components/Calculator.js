// components/Calculator.js
import React from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <div className="calculator-buttons">
        <div className="row">
          <Button id="seven" label="7" />
          <Button id="eight" label="8" />
          <Button id="nine" label="9" />
          <Button id="divide" label="/" />
        </div>
        <div className="row">
          <Button id="four" label="4" />
          <Button id="five" label="5" />
          <Button id="six" label="6" />
          <Button id="multiply" label="*" />
        </div>
        <div className="row">
          <Button id="one" label="1" />
          <Button id="two" label="2" />
          <Button id="three" label="3" />
          <Button id="subtract" label="-" />
        </div>
        <div className="row">
          <Button id="zero" label="0" />
          <Button id="decimal" label="." />
          <Button id="equals" label="=" />
          <Button id="add" label="+" />
        </div>
        <div className="row">
          <Button id="clear" label="AC" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
