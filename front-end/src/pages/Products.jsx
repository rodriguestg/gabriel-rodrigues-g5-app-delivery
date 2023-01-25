import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import productContext from '../context/productContext';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';

export default function Products() {
  const history = useHistory();
  const { sum, cart } = useContext(productContext);
  const saveCartToLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    history.push('/customer/checkout');
  };

  const isCartEmpty = () => cart.every((c) => c.quantity === 0 || c.quantity === '');

  return (
    <>
      <NavBar />
      <ProductCard />
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ saveCartToLocalStorage }
        disabled={ isCartEmpty() }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          {sum.toFixed(2).replace('.', ',')}
        </p>
      </button>
    </>
  );
}
