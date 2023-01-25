import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderSeller({ date, status }) {
  const { id } = useParams();

  return (
    <div>
      <span data-testid="seller_order_details__element-order-details-label-order-id">
        PEDIDO
        { id }
      </span>
      <span data-testid="seller_order_details__element-order-details-label-order-date">
        { date }
      </span>

      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </span>
      <button
        date-testid="seller_order_details__button-preparing-check"
        type="button"
      >
        PREPARAR PEDIDO
      </button>
      <button
        date-testid="seller_order_details__button-dispatch-check"
        type="button"
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

HeaderSeller.propTypes = {}.isRequired;

export default HeaderSeller;
