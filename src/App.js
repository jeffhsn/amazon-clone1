import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';

import Navigation from './routes/navigation/Navigation.components';
import Home from './routes/home/Home.component';
import Authentication from './routes/authentication/Authentication.component';
import Checkout from './routes/checkout/Checkout.component';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
