import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function OrderCard({ sale }) {
  const { id,
    status,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    totalPrice } = sale;
  const [currentPath, setCurrentPath] = useState('');
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname.includes('seller')) return setCurrentPath('seller');
    setCurrentPath('customer');
  }, []);

  const date = new Date(saleDate).getDate();

  return (
    <div>
      <p data-testid={ `${currentPath}_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `${currentPath}_orders__element-delivery-status-${id}` }>
        {status}
      </p>
      {currentPath === 'seller'
        ? (
          <p data-testid={ `$seller_orders__element-card-address-${id}` }>
            {`${deliveryAddress}, ${deliveryNumber}`}
          </p>)
        : null }
      <p data-testid={ `${currentPath}_orders__element-order-date-${id}` }>
        {date}
      </p>
      <p data-testid={ `${currentPath}_orders__element-card-price-${id}` }>
        {totalPrice}
      </p>
    </div>

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
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
  }).isRequired,
};
