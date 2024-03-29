import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import promiseMW from 'redux-promise'
import { createStore ,applyMiddleware} from "redux";
import  rootReducer from "./Redux/Reducer/index";

const mystor=applyMiddleware(promiseMW)(createStore)

ReactDOM.render(
  <Provider store={mystor(rootReducer)}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
