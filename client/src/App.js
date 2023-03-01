import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgetPassword from './components/ForgetPassword';
import AuthProvider from './Context/AuthProvider';
import Profile from './components/Profile';

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
              <Route path = "/" element= {<Layout/>}>
                <Route index element = {<Home/>}/>
                <Route path= "/about" element = {<About/>}/>
                <Route path= "/contact" element = {<Contact/>}/>
                <Route path= "/login" element = {<Login/>}/>
                <Route path= "/signup" element = {<Signup/>}/>
                <Route path= "/forgetPassword" element = {<ForgetPassword/>}/>
                <Route path= "/profile" element = {<Profile/>}/>
              </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
    
  );
}

export default App;
