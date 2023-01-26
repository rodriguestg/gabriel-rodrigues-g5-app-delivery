import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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

  return (
    <button
      onClick={ () => (currentPath === 'seller' ? history.push(`/seller/orders/${id}`)
        : history.push(`/customer/orders/${id}`)) }
      type="button"
    >
      <p
        data-testid={ `${currentPath}_orders__element-order-id-${id}` }
      >
        {id}
      </p>
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
        {returnDate()}
      </p>
      <p data-testid={ `${currentPath}_orders__element-card-price-${id}` }>
        {totalPrice.replace('.', ',')}
      </p>
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
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
  }).isRequired,
};
