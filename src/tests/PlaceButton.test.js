import { render, screen } from '@testing-library/react';

import PlaceButton from '../components/PlaceButton';

test('button is disabled if order is empty', () => {
  const order = {
    id: 'testOrderId',
    'customer-id': 'testCustomerId',
    items: [],
    total: 'testTotal',
  };

  render(<PlaceButton order={order} />);

  expect(
    screen.getByRole('button', { name: /Order is empty/i })
  ).toBeDisabled();
  expect(screen.queryByRole('button', { name: /place order/i })).toBeNull();
});

test('button is enabled if order is not empty', () => {
  const order = {
    id: 'testOrderId',
    'customer-id': 'testCustomerId',
    items: [
      {
        'product-id': 'testProductId',
        quantity: 'testQuantity',
        'unit-price': 'testPrice',
        total: 'testProductTotal',
      },
    ],
    total: 'testTotal',
  };

  render(<PlaceButton order={order} />);

  expect(screen.getByRole('button', { name: /Place Order/i })).toBeEnabled();
  expect(screen.queryByRole('button', { name: /Order is empty/i })).toBeNull();
});
