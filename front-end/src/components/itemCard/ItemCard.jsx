import React from 'react';
import './itemCard.css';

export default function ItemCard({ item, path, index }) {
  return (

    <div key={ item.id } className="item-card">
      <img src={ item.urlImage } alt={ item.name } className="item-img" />
      <div className="item-info-container">
        <h5
          className="item-name"
          data-testid={
            `${path}_order_details__element-order-table-name-${index}`
          }
        >
          {item.name}
        </h5>
        <div className="item-quantity-container">
          <h6
            className="text-orange"
            data-testid={
              `${path}_order_details__element-order-table-unit-price-${index}`
            }
          >
            R$
            {(+item.price).toFixed(2).replaceAll('.', ',')}
          </h6>
          <h6>X</h6>
          <h6
            data-testid={
              `${path}_order_details__element-order-table-quantity-${index}`
            }
          >
            {item.SaleProduct.quantity}
          </h6>
          <h6>=</h6>
          <h6
            className="text-orange"
            data-testid={
              `${path}_order_details__element-order-table-sub-total-${index}`
            }
          >
            R$
            {((+item.price) * item.SaleProduct.quantity).toFixed(2).replaceAll('.', ',')}
          </h6>
        </div>
      </div>

    </div>

  );
}

ItemCard.propTypes = {}.isRequired;
