import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/Checkout";
import Home from "./pages/Home";
import Links from "./components/Links";
import Header from "./components/Header";
import Prototypes from "./components/Prototypes";
import Orders from "./components/Orders";
import Footer from "./components/Footer";
import AppStateProvider from "./providers/AppStateProvider";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Checkout from "./pages/Checkout";

function App() {
  return (
   
  
    <AppStateProvider>
    
   
  </AppStateProvider>
);
   //   <Links />
    
   //   <Routes>

     //   <Route path="/checkout" component={Checkout} />
     //   <Route path="/" exact component={Home} />
    //  </Routes>
 
 //   <Header />
 //   <div className="container">
 //     <Prototypes />
 //     <Orders />
  //    <Footer />
  //  </div>

    
}

export default App;
