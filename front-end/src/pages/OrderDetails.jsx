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

  const getOrder = async () => {
    const response = await (await axios.get(`http://localhost:3001/sales/details/${id}`)).data;

    if (response) setOrder(response);
  };

  useEffect(() => {
    getOrder();
  }, []);

  const returnDate = () => {
    if (order) {
      const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      ];
      const date = new Date(order.saleDate);

      return `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;
    }
  };

  return (
    <div>
      <NavBar />
      { order && (
        path === 'customer'
          ? (
            <HeaderCustomer
              seller={ order }
              date={ returnDate() }
              updatePage={ getOrder }
            />
          ) : (
            <HeaderSeller
              date={ returnDate() }
              status={ order.status }
              updatePage={ getOrder }
            />
          )
      )}
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
        <h2 data-testid={ `${path}_order_details__element-order-total-price` }>
          { (+order.totalPrice).toFixed(2).replaceAll('.', ',')}
        </h2>)}
    </div>
  );
}
