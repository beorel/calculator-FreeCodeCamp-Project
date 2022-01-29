import React from 'react';
import ReactDOM from 'react-dom';
import JavascriptCalculator from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import calculatorReducer from './CalcuReducer';
import { Provider } from 'react-redux';

const store = createStore(calculatorReducer , applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <JavascriptCalculator />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


