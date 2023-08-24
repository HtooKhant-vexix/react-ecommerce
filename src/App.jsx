import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Product from './components/Product';
import './index.css'
import Nav from './components/Nav';
import AddToCart from './components/addToCart';
const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Product/>}></Route>
        <Route path='/AddToCart' element={<AddToCart/>}></Route>
      </Routes>
    </div>
  );
}

export default App