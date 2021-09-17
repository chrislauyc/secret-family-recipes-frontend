import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//1. install redux and react-redux
//2. import wrapper and store
//3. Create store passing in rootReducer


ReactDOM.render(
  <React.StrictMode>
    {/* Wrap app in Provider passing in store as props */}
    <App />
  </React.StrictMode>,
  document.getElementById( 'root' )
);
