import React from 'react';
import ReactDOM from 'react-dom';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles/main.scss';
import {TSKolubaraApp} from './tskolubara';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <TSKolubaraApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
