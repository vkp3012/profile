import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Layout from './componentes/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contect';
import Login from './componentes/Login';
import Signin from './componentes/Signin';
import ForgetPassword from './componentes/ForgetPassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element= {<Layout/>}>
            <Route index element = {<Home/>}/>
            <Route path= "/about" element = {<About/>}/>
            <Route path= "/contact" element = {<Contact/>}/>
            <Route path= "/login" element = {<Login/>}/>
            <Route path= "/signin" element = {<Signin/>}/>
            <Route path= "/forgetPassword" element = {<ForgetPassword/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
