// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Calculator from './components/Calculator';
import calculatorReducer from './redux/reducers';

const store = createStore(calculatorReducer);

ReactDOM.render(
  <Provider store={store}>
    <Calculator />
  </Provider>,
  document.getElementById('root')
);
