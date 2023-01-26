import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderCustomer({ seller, date, updatePage }) {
  const { id } = useParams();

  const updateOrder = async () => {
    const url = 'http://localhost:3001/sales';

    if (seller.status === 'Em Trânsito') {
      await axios.patch(url, { status: 'Entregue', id });
    }

    updatePage();
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
        { date }
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
        disabled={ seller.status !== 'Em Trânsito' }
        onClick={ updateOrder }
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

HeaderCustomer.propTypes = {}.isRequired;

export default HeaderCustomer;
