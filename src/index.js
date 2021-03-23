import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA6h42nF47yEW65q5YZW_E8k4FEbsra558",
  authDomain: "react-firebase-ex-aaddc.firebaseapp.com",
  projectId: "react-firebase-ex-aaddc",
  storageBucket: "react-firebase-ex-aaddc.appspot.com",
  messagingSenderId: "714873572185",
  appId: "1:714873572185:web:ffb1635be005c387ba9a48"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
