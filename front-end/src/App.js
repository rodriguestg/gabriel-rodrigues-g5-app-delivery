import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import admin from './pages/adminPage/AdminPage';
import Checkout from './pages/checkout/Checkout';
import Products from './pages/Products/Products';
import ProductProvider from './context/productProvider';
import Login from './pages/login/Login';
import SellerPage from './pages/SellerPage';
import Register from './pages/register/Register';
import OrderDetails from './pages/orderDetails/OrderDetails';
import CustomerPage from './pages/CustomerPage/CustomerPage';

function App() {
  return (
    <Switch>
      <Route path="/customer/products">
        <ProductProvider>
          <Products />
        </ProductProvider>
      </Route>
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ OrderDetails } />
      <Route path="/customer/orders" component={ CustomerPage } />
      <Route path="/seller/orders/:id" component={ OrderDetails } />
      <Route path="/seller/orders" component={ SellerPage } />
      <Route path="/admin/manage" component={ admin } />
      <Route path="/register" component={ Register } />
      <Route path="/" component={ Login } />
    </Switch>
  );
}

export default App;
