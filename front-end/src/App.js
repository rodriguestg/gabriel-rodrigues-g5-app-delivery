import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Checkout from './pages/Checkout';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/customer/products" component={ NavBar } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" />
      <Route path="/customer/orders" />
      <Route path="/seller/orders/:id" />
      <Route path="/seller/orders" />
      <Route path="/admin/manage" />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
