import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import ItemCard from '../../components/itemCard/ItemCard';
import NavBar from '../../components/NavBar/NavBar';
import HeaderCustomer from '../../components/header/HeaderCustomer';
import HeaderSeller from '../../components/header/HeaderSeller';
import './orderDetails.css';
import StepProgressBar from '../../components/stepProgressBar/StepProgressBar';

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
      <main className="item-card-container">
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
                order={ order }
                updatePage={ getOrder }
              />
            )
        )}
        { order
      && <StepProgressBar status={ order.status } /> }
        { order && order.products.map((product, index) => (
          <ItemCard
            item={ product }
            path={ pathname }
            index={ index }
            key={ index }
          />
        ))}
        { order && (
          <h4
            data-testid={ `${path}_order_details__element-order-total-price` }
            className="total-price-order"
          >
            <span className="total-span">Total </span>
            <span className="price-span">
              R$
              { (+order.totalPrice).toFixed(2).replaceAll('.', ',')}
            </span>

          </h4>)}
      </main>

    </div>
  );
}
