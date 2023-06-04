import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './pages/Checkout';
import AppStateProvider from "./providers/AppStateProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <BrowserRouter>
    <Routes>
					<Route path="/" exact element={<Home />}></Route>
					<Route path="/checkout/" element={<Checkout />}> </Route>
    </Routes>
 
     </BrowserRouter>
     <AppStateProvider /> 
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
