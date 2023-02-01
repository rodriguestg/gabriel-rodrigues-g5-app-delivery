import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderSeller({ date, status, updatePage }) {
  const { id } = useParams();

  const updateOrder = async () => {
    const url = 'http://localhost:3001/sales';
    if (status === 'Pendente') {
      await axios.patch(url, { status: 'Preparando', id });
    } else {
      await axios.patch(url, { status: 'Em Trânsito', id });
    }

    updatePage();
  };

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
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        disabled={ status !== 'Pendente' }
        onClick={ updateOrder }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        disabled={ status !== 'Preparando' }
        onClick={ updateOrder }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

HeaderSeller.propTypes = {}.isRequired;

export default HeaderSeller;
