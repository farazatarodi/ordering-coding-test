import { render, screen } from '@testing-library/react';

import Items from '../components/Items';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

test('customer card shows all info correctly', () => {
  const initialState = {
    productsReducer: {
      products: [
        {
          id: 'testProductId',
          description: 'testDescription',
          category: 'testCategory',
          price: 'testPrice',
        },
      ],
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

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

  render(
    <Provider store={store}>
      <Items order={order} />
    </Provider>
  );

  expect(screen.getByText(/testproductid/i)).toBeTruthy();
  expect(screen.getByText(/testdescription/i)).toBeTruthy();
  expect(screen.getByText(/testprice/i)).toBeTruthy();
  expect(screen.getByText(/testproducttotal/i)).toBeTruthy();
});
