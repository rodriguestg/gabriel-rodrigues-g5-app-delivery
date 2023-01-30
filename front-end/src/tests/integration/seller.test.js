import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithRouter from '../utils/renderWith';
import App from '../../App';
import Login from '../utils/Login';
import mockSales from './mock/seller.mock';

describe('Testes no fluxo do vendedor', () => {
  renderWithRouter(<App />);

  const loginToOrderDetails = async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: mockSales.mockGetSalesOne }));
    await Login('seller');
    await screen.findByTestId(/_orders__element-card-price-/);

    const orderCard = screen.getByRole('button', {
      name: /1 pendente/i,
    });

    axios.get = jest.fn(() => Promise.resolve({ data: mockSales.mockOneSalePendente }));

    userEvent.click(orderCard);
    await screen.findByTestId(/order_details__element-order-table-item-number-0/);
  };
  it('É possível alterar o status do pedido para "Preparando"', async () => {
    await loginToOrderDetails();

    screen.getByText(/pendente/i);

    axios.get = jest.fn(() => Promise.resolve({ data: mockSales.mockOneSalePreparando }));
    const btnPrepararPedido = screen.getByRole('button', {
      name: /preparar pedido/i,
    });
    userEvent.click(btnPrepararPedido);

    await screen.findByText(/preparando/i);

    axios.get = jest.fn(() => Promise.resolve({ data: mockSales.mockOneSaleEmTrânsito }));
    const btnSaiuParaEntrega = screen.getByRole('button', {
      name: /saiu para entrega/i,
    });
    userEvent.click(btnSaiuParaEntrega);

    await screen.findByText(/em trânsito/i);
  });
});
