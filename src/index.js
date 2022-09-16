import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter as Router} from 'react-router-dom'   //=引入HashRouter，并重命名为Router

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>  //该组件可启用react得严格模式
  //   <App />
  // </React.StrictMode>
  <Router>
    <App/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
