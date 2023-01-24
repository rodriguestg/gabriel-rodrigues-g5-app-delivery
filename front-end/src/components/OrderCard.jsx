import React from 'react';
import PropTypes from 'prop-types';

export default function OrderCard({ order }) {
  return (
    <div>
      <p data-testid="seller_orders__element-order-id-1">Pedido</p>
      <p data-testid="seller_orders__element-delivery-status-1">Status</p>
      <p data-testid="seller_orders__element-card-address-1">Endereço</p>
      <p data-testid="seller_orders__element-order-date-1">Data</p>
      <p data-testid="seller_orders__element-card-price-1">Preço</p>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
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
