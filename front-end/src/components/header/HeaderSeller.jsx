import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

function HeaderSeller({ date, order, updatePage }) {
  const { id } = useParams();

  const updateOrder = async () => {
    const url = 'http://localhost:3001/sales';
    if (order.status === 'Pendente') {
      await axios.patch(url, { status: 'Preparando', id });
    } else {
      await axios.patch(url, { status: 'Em Trânsito', id });
    }

    updatePage();
  };

  return (
    <div className="header-order-details">
      <div>
        <h4>Detalhes do pedido</h4>
        <span
          data-testid={ `customer_order_details__element
        -order-details-label-seller-name` }
        >
          Vendedor(a):
          { ` ${order.seller.name}` }
          <br />
        </span>
        <span>
          Data:
          {' '}
          { date }
        </span>
      </div>

      <button
        data-testid="seller_order_details__button-preparing-check"
        type="button"
        className="btn"
        disabled={ order.status !== 'Pendente' }
        onClick={ updateOrder }
      >
        PREPARAR PEDIDO
      </button>
      <button
        data-testid="seller_order_details__button-dispatch-check"
        type="button"
        className="btn"
        disabled={ order.status !== 'Preparando' }
        onClick={ updateOrder }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}

HeaderSeller.propTypes = {}.isRequired;

export default HeaderSeller;
