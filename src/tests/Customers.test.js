import { render, screen } from '@testing-library/react';

import Customers from '../components/Customers';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

test('we see the empty table in customers page', () => {
  const initialState = { customersReducer: { customers: [] } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Customers />
    </Provider>
  );

  expect(screen.getByText(/Nothing/i)).toBeTruthy();
});

test('customer card shows all info correctly', () => {
  const initialState = {
    customersReducer: {
      customers: [
        {
          id: 'testID',
          name: 'testName',
          since: 'testSince',
          revenue: 'testRevenue',
        },
      ],
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Customers />
    </Provider>
  );

  expect(screen.getByText(/testid/i)).toBeTruthy();
  expect(screen.getByText(/testname/i)).toBeTruthy();
  expect(screen.getByText(/testsince/i)).toBeTruthy();
  expect(screen.getByText(/testrevenue/i)).toBeTruthy();
});

test('we see the loading card while fetching data', () => {
  const initialState = {
    customersReducer: {
      customers: [],
      loading: true,
      error: null,
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Customers />
    </Provider>
  );

  expect(screen.getByText(/Loading/i)).toBeTruthy();
});

test('we see the error data if fetch fails', () => {
  const initialState = {
    customersReducer: {
      customers: [],
      loading: false,
      error: 'testError',
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Customers />
    </Provider>
  );

  expect(screen.getByText(/Error Fetching Data: testError/i)).toBeTruthy();
});
