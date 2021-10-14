import { render, screen } from '@testing-library/react';

import Products from '../components/Products';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

test('we see the empty table in products page', () => {
  const initialState = {
    productsReducer: { products: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(screen.getByText(/id/i)).toBeTruthy();
  expect(screen.queryByText(/€/i)).toBeNull();
});

test('product card shows all info correctly', () => {
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
    optionsReducer: [],
    ordersReducer: { orders: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(screen.getByText(/testproductid/i)).toBeTruthy();
  expect(screen.getByText(/testdescription/i)).toBeTruthy();
  expect(screen.getByText(/testcategory/i)).toBeTruthy();
  expect(screen.getByText(/testprice/i)).toBeTruthy();
});
