import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import admin from './pages/adminPage';
import adminPage from './pages/adminPage';
import Products from './components/Products';
import ProductProvider from './context/productProvider';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route path="/customer/products">
        <ProductProvider>
          <Products />
        </ProductProvider>
      </Route>
      <Route path="/customer/checkout" />
      <Route path="/customer/orders/:id" />
      <Route path="/customer/orders" />
      <Route path="/seller/orders/:id" />
      <Route path="/seller/orders" />
      <Route path="/admin/manage" component={ admin } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
