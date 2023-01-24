import React, { useContext } from 'react';
import productContext from '../context/productContext';
import ProductCard from '../pages/ProductCard';
import NavBar from './NavBar';

export default function Products() {
  const { sum } = useContext(productContext);
  return (
    <>
      <NavBar />
      <ProductCard />
      <button
        data-testid="customer_products__button-cart"
        type="button"
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
