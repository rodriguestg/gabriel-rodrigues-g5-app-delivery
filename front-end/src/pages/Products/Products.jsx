import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import productContext from '../../context/productContext';
import ProductCard from '../../components/ProductCard';
import NavBar from '../../components/NavBar/NavBar';
import './Products.css';

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
        className="btn-cart"
      >
        <p
          data-testid="customer_products__checkout-bottom-value"
          className="btn-cart-text"
        >
          Carrinho R$
          {sum.toFixed(2).replace('.', ',')}
          {' '}
          <BsCartFill />
        </p>
      </button>
    </>
  );
}
