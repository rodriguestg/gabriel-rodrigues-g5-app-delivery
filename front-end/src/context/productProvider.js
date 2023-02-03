import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import productContext from './productContext';

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sum, setSum] = useState(0);
  const history = useHistory();

  const createEmptyCart = (data) => {
    const emptyCart = data.map(({ id, name, price, urlImage }) => ({
      id,
      name,
      quantity: 0,
      price: Number(price),
      urlImage,
    }));
    setCart(emptyCart);
  };

  const fetchProducts = async () => {
    const data = await axios.get('http://localhost:3001/products');
    createEmptyCart(data.data);
    setProducts(data.data);
  };

  const validateToken = async () => {
    const { token } = JSON.parse(localStorage.getItem('user')) || {};
    try {
      await axios.post('http://localhost:3001/login/token', {
        token,
      });
      fetchProducts();
    } catch (_error) {
      history.push('/login');
    }
  };

  const calculateSum = () => {
    const newSum = cart.reduce((acc, c) => acc + (c.quantity * c.price), 0);
    setSum(newSum);
  };

  useEffect(() => {
    validateToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const increaseQuantity = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = product.quantity === '' ? product.quantity = 1
          : product.quantity += 1;
      }
      return product;
    });
    setCart(newCart);
    calculateSum();
  };

  const decreaseQuantity = (id) => {
    const newCart = cart.map((product) => {
      if (product.id === id && product.quantity > 0) {
        product.quantity -= 1;
      }
      return product;
    });
    setCart(newCart);
    calculateSum();
  };

  const changeQuantity = (id, value) => {
    const newCart = cart.map((product) => {
      if (product.id === id) {
        product.quantity = value === '' ? value : Number(value);
      }
      return product;
    });
    setCart(newCart);
    calculateSum();
  };

  const newContext = useMemo(() => ({
    products,
    cart,
    increaseQuantity,
    decreaseQuantity,
    changeQuantity,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    sum }), [products, cart]);
  return (
    <productContext.Provider value={ newContext }>
      {children}
    </productContext.Provider>
  );
}

ProductProvider.propTypes = {}.isRequired;

export default ProductProvider;
