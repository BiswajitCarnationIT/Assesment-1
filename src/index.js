import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Assesment1 from './Components/Assesment1'
import SignUp from './Components/SignUp';

ReactDOM.render(
  <React.StrictMode>
    <Assesment1 />
    {/* <SignUp/> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
