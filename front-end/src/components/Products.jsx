import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import productContext from '../context/productContext';
import ProductCard from '../pages/ProductCard';
import NavBar from './NavBar';

export default function Products() {
  const { sum, cart } = useContext(productContext);
  const history = useHistory();
  const saveCartLocalStorage = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    history.push('/customer/checkout');
  };
  return (
    <>
      <NavBar />
      <ProductCard />
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ saveCartLocalStorage }
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
        >
          Ver Carrinho: R$
          {sum.toFixed(2).replace('.', ',')}
        </p>
      </button>
    </>
  );
}
