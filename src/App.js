import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import {  Cart, Home } from './pages';



const App = () => {




  return(
    <div className="wrapper">
        <Header />
      <div className="content">
        <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/cart' element={<Cart />}/>


        </Routes>

      </div>
    </div>

);
  
  }
export default App;