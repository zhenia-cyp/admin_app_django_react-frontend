import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import configureStore from "./redux/configureStore";
import {Provider} from "react-redux";

axios.defaults.baseURL = 'http://0.0.0.0:8000/api/v1/';
axios.defaults.withCredentials = true;
// axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
            <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
