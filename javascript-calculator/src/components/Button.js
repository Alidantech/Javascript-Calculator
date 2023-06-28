// components/Button.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateDisplay } from '../redux/actions';

const Button = ({ id, label }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(updateDisplay(label));
  };

  return (
    <div id={id} className="button" onClick={handleClick}>
      {label}
    </div>
  );
};

export default Button;
