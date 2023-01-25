import React from 'react';

export default function ItemTable({ item, path, index }) {
  return (
    <tr key={ item.id }>
      <td
        data-testid={
          `${path}_order_details__element-order-table-item-number-${index}`
        }
      >
        {index + 1}
      </td>
      <td
        data-testid={
          `${path}_order_details__element-order-table-name-${index}`
        }
      >
        {item.name}
      </td>
      <td
        data-testid={
          `${path}_order_details__element-order-table-quantity-${index}`
        }
      >
        {item.quantity}
      </td>
      <td
        data-testid={
          `${path}_order_details__element-order-table-unit-price-${index}`
        }
      >
        {(+item.price).toFixed(2).replaceAll('.', ',')}
      </td>
      <td
        data-testid={
          `${path}_order_details__element-order-table-sub-total-${index}`
        }
      >
        {((+item.price) * item.SaleProduct.quantity).toFixed(2).replaceAll('.', ',')}
      </td>
    </tr>
  );
}

ItemTable.propTypes = {}.isRequired;
