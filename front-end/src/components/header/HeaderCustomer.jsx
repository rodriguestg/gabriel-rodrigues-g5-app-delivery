import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import './header.css';

function HeaderCustomer({ seller, updatePage }) {
  const { id } = useParams();

  const updateOrder = async () => {
    const url = 'http://localhost:3001/sales';

    if (seller.status === 'Em Trânsito') {
      await axios.patch(url, { status: 'Entregue', id });
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
          { ` ${seller.seller.name}` }
        </span>
      </div>
      <button
        className="btn"
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
