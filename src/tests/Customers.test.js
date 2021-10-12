import { render, screen } from '@testing-library/react';

import Customers from '../components/Customers';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('we see the empty table in customers page', () => {
  const initialState = {};
  const mockStore = configureStore();

  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Customers />
    </Provider>
  );
  expect(screen.getByText(/id/i)).toBeTruthy();
  expect(screen.queryByText(/€/i)).toBeNull();
});

test('customer card shows all info correctly', () => {
  const initialState = {
    customersReducer: [
      {
        id: 'testID',
        name: 'testName',
        since: 'testSince',
        revenue: 'testRevenue',
      },
    ],
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
