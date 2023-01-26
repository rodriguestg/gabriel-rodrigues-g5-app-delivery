import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderCustomer({ seller }) {
  const { id } = useParams();

  const returnDate = () => {
    if (seller) {
      const months = [
        '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12',
      ];
      const date = new Date(seller.saleDate);
      return `${date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`;
    }
  };

  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        PEDIDO
        { id }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        { seller.seller.name }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        { returnDate() }
      </span>

      <span
        data-testid={ `customer_order_details__element-order-details-label-delivery-status
        -${seller.status}` }
      >
        { seller.status }
      </span>
      <button
        data-testid="customer_order_details__button-delivery-check"
        type="button"
        disabled
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

HeaderCustomer.propTypes = {}.isRequired;

export default HeaderCustomer;
