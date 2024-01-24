import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIOILNsonoscp81Tz17EZHTzryqW_dKNk",
  authDomain: "nico-cambareri-react.firebaseapp.com",
  projectId: "nico-cambareri-react",
  storageBucket: "nico-cambareri-react.appspot.com",
  messagingSenderId: "196990425014",
  appId: "1:196990425014:web:c200d3ebf98bbe8e755317"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)