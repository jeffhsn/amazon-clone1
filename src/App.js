import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Navigation from './routes/navigation/Navigation.components';
import Home from './routes/home/Home.component';
import Checkout from './routes/checkout/Checkout.component';
import Login from './routes/login/Login.component';
import Register from './routes/register/Register.component';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
