import React, { useEffect } from 'react';
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
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase';

const App = () => {
  const [_, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
