import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export default function SaleCard({ sale }) {
  const { id,
    status,
    deliveryAddress,
    deliveryNumber,
    saleDate,
    totalPrice } = sale;

  const date = new Date(saleDate).getDate();

  return (
    <Redirect to={ `/seller/orders/${id}` }>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>{id}</p>
      <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{status}</p>
      <p data-testid={ `seller_orders__element-card-address-${id}` }>
        {`${deliveryAddress}, ${deliveryNumber}`}
      </p>
      <p data-testid={ `seller_orders__element-order-date-${id}` }>{date}</p>
      <p data-testid={ `seller_orders__element-card-price-${id}` }>{totalPrice}</p>
    </Redirect>
  );
}

SaleCard.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    sellerId: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    deliveryAddress: PropTypes.string.isRequired,
    deliveryNumber: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    seller_id: PropTypes.number.isRequired,
  }).isRequired,
};
