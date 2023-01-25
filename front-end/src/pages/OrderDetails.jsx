import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemTable from '../components/ItemTable';
import NavBar from '../components/NavBar';
import HeaderCustomer from '../components/HeaderCustomer';
import HeaderSeller from '../components/HeaderSeller';

export default function OrderDetails() {
  const [order, setOrder] = useState(undefined);
  const [path, setPath] = useState('');
  const { location: { pathname } } = useHistory();

  const { id } = useParams();

  useState(() => {
    setPath(pathname.includes('customer') ? 'customer' : 'seller');
  }, []);

  useEffect(() => {
    const getOrder = async () => {
      const response = await (await axios.get(`http://localhost:3001/sales/details/${id}`)).data;

      if (response) setOrder(response);
    };

    getOrder();
  }, []);

  const returnDate = () => {
    const date = new Date(order.saleDate);

    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <div>
      <NavBar />
      { path === 'customer'
        ? (
          <HeaderCustomer
            date={ returnDate() }
            seller={ order }
          />)

        : (
          <HeaderSeller
            date={ returnDate() }
          />)}
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>
          { order && order.products.map((product, index) => (
            <ItemTable
              item={ product }
              path={ pathname }
              index={ index }
              key={ index }
            />
          ))}
        </tbody>
      </table>
      { order && (
        <h2 data-testid={ `${path}_checkout__element-order-total-price` }>
          { (+order.totalPrice).toFixed(2).replaceAll('.', ',')}
        </h2>)}

    </div>
  );
}
