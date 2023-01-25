import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderCustomer({ seller, index, date, status }) {
  const { id } = useParams();
  return (
    <div>
      <span data-testid="customer_order_details__element-order-details-label-order-id">
        PEDIDO
        { id }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-seller-name">
        { seller }
      </span>
      <span data-testid="customer_order_details__element-order-details-label-order-date">
        { date }
      </span>

      <span
        data-testid={ `customer_order_details__element-order-details-label-delivery-status
        -${index}` }
      >
        { status }
      </span>
      <button
        date-testid="customer_order_details__button-delivery-check"
        type="button"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

HeaderCustomer.propTypes = {}.isRequired;

export default HeaderCustomer;
