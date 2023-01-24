import React from 'react';

export default function OrderCard() {
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
