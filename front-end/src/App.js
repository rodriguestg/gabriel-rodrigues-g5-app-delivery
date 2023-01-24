import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Products from './components/Products';
import ProductProvider from './context/productProvider';

function App() {
  return (
    <Switch>
      <ProductProvider>
        <Route path="/customer/products" component={ Products } />
      </ProductProvider>
      <Route path="/customer/checkout" />
      <Route path="/customer/orders/:id" />
      <Route path="/customer/orders" />
      <Route path="/seller/orders/:id" />
      <Route path="/seller/orders" />
      <Route path="/admin/manage" />
      <Route path="/" />
    </Switch>
  );
}

export default App;
