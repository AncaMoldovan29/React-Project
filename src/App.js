import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./containers/products/Products";
import Users from "./containers/users/users";
import AppContainer from "./components/AppContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { Breadcrumb} from "react-bootstrap";
import Login from "./containers/login/login.component";
import UsersContainer from "./containers/tema4/usersContainer";
import UsersContainerList from './containers/tema4-curs/UsersContainer';
import Cart from './containers/cart/Cart.component';
import { useNavigate } from "react-router-dom";
import {STOCKS} from './containers/products/constants';

function App() {
  const navigate = useNavigate();
  const [cart, setCart] = useState({products: [], total: 0});
  const [stock, setStock] = useState(STOCKS);

  const setCartHandler = (param) => {
      setCart(param);
  };

  console.log('cart', cart);

  return (
    <div className="App">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => navigate('/products')}> Products </Breadcrumb.Item>

          <Breadcrumb.Item onClick={() => navigate('/cart')}> Cosul meu </Breadcrumb.Item>
      </Breadcrumb>

      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="products" element={<Products setCart={setCartHandler} cart={cart} stock={stock}/>} />
        <Route path="users" element={<Users />} />
        <Route path="login" element={<Login />} />
        <Route path="tema-4-anca" element={<UsersContainer />} />
        <Route path="tema-4-curs" element={<UsersContainerList/>} />
        <Route path="cart" element={<Cart cart={cart} setCart={setCartHandler} stock={stock} setStock={setStock}/>}
        />
      </Routes>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello user
        </a>
      </header> */}
    </div>
  );
}

export default App;
