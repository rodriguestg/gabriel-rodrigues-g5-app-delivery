import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../components/NavBar';

function Checkout() {
  const [products, setProducts] = useState([]);
  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    const sellersResponse = await axios.get('http://localhost:3001/users/sellers');
    setSellers(sellersResponse.data);

    const productsLocalStorage = JSON.parse(localStorage.getItem('cart'));

    if (productsLocalStorage) {
      setProducts(productsLocalStorage);

      let sum = 0;
      productsLocalStorage.map((item) => {
        sum += item.quantity * item.unityValue;
        return sum;
      });

      setTotal(sum);
    }
  };

  const removeItem = (item) => {
    const filteredArray = products
      .filter((product) => product.description !== item.description);
    setProducts(filteredArray);
    localStorage.setItem('cart', JSON.stringify(filteredArray));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        NavBar()
      }
      <h3>
        Finalizar Pedido
      </h3>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  {index + 1}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-name-${index}`
                  }
                >
                  {item.description}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  {item.unityValue.toFixed(2).replaceAll('.', ',')}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  {(item.unityValue * item.quantity).toFixed(2).replaceAll('.', ',')}
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                >
                  <button
                    type="button"
                    onClick={ () => removeItem(item) }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <h2 data-testid="customer_checkout__element-order-total-price">
        Total: R$
        {' '}
        {total.toFixed(2).replaceAll('.', ',')}
      </h2>

      <h3>
        Detalhes e Endereço para Entrega
      </h3>
      <form action="">
        <label htmlFor="sellers">
          <select
            name="sellers"
            id="sellers"
            onChange={ (e) => setSelectedSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"
          >
            {
              sellers.map(({ name, id }) => (
                <option key={ id } value={ name }>{name}</option>
              ))
            }
          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            placeholder="Travessa Terceira, Bairro Muruci"
            onChange={ (e) => setAddress(e.target.value) }
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            type="text"
            id="number"
            placeholder="198"
            onChange={ (e) => setNumber(e.target.value) }
            data-testid="customer_checkout__input-address-number"
          />
        </label>
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
}

export default Checkout;
