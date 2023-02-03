import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { SlWallet } from 'react-icons/sl';
import { IoCalendarOutline } from 'react-icons/io5';

export default function OrderCard({ sale }) {
  const { id,
    status,
    deliveryAddress,
    deliveryNumber,
    totalPrice } = sale;
  const [currentPath, setCurrentPath] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname.includes('seller')) return setCurrentPath('seller');
    setCurrentPath('customer');
  }, []);

  const returnDate = () => {
    if (sale) {
      const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      ];
      const date = new Date(sale.saleDate);
      return `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;
    }
  };

  const changeColorStatus = () => {
    const statusList = document.getElementsByClassName('order-status');
    for (let i = 0; i < statusList.length; i += 1) {
      if (statusList[i].innerText === 'Pendente') {
        statusList[i].style.backgroundColor = 'red';
      } else if (statusList[i].innerText === 'Em Trânsito') {
        statusList[i].style.backgroundColor = '#f28a05';
      } else {
        statusList[i].style.backgroundColor = '#7dbd61';
      }
    }
  };

  useEffect(() => {
    changeColorStatus();
  }, []);

  return (
    <button
      className="order-card"
      onClick={ () => (currentPath === 'seller' ? history.push(`/seller/orders/${id}`)
        : history.push(`/customer/orders/${id}`)) }
      type="button"
    >
      <div className="status-container">
        <p
          className="order-status"
          data-testid={ `${currentPath}_orders__element-delivery-status-${id}` }
        >
          {status}
        </p>
        <div className="order-price">
          <SlWallet />
          <p
            data-testid={ `${currentPath}_orders__element-card-price-${id}` }
          >
            R$
            {totalPrice.replace('.', ',')}
          </p>
        </div>
        <div className="order-date">
          <IoCalendarOutline />
          <p
            data-testid={ `${currentPath}_orders__element-order-date-${id}` }
          >
            {returnDate()}
          </p>
        </div>
      </div>
      <div className="info-container">
        <p
          className="order-id"
          data-testid={ `${currentPath}_orders__element-order-id-${id}` }
        >
          #000
          {id}
        </p>
        {currentPath === 'seller'
          ? (
            <p data-testid={ `$seller_orders__element-card-address-${id}` }>
              {`${deliveryAddress}, ${deliveryNumber}`}
            </p>)
          : null }
      </div>
    </button>

  );
}

OrderCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    totalPrice: PropTypes.string.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
