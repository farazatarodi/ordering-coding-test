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

  expect(screen.getByText(/nothing/i)).toBeTruthy();
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

test('we see the loading card while fetching data', () => {
  const initialState = {
    productsReducer: {
      products: [],
      loading: true,
      error: null,
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(screen.getByText(/Loading/i)).toBeTruthy();
});

test('we see the error data if fetch fails', () => {
  const initialState = {
    productsReducer: {
      products: [],
      loading: false,
      error: 'testError',
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(screen.getByText(/Error Fetching Data: testError/i)).toBeTruthy();
});
