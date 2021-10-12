import { render, screen, fireEvent } from '@testing-library/react';

import Orders from '../components/Orders';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

test('we see the empty table in orders page', () => {
  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Orders />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/id/i)).toBeTruthy();
  expect(screen.queryByText(/€/i)).toBeNull();
});

test('order card shows all info correctly', () => {
  const initialState = {
    ordersReducer: [
      {
        id: 'testOrderId',
        'customer-id': 'testCustomerID',
        items: [],
        total: 'testTotal',
      },
    ],
    customersReducer: [
      {
        id: 'testCustomerID',
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
      <Router>
        <Orders />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/testorderid/i)).toBeTruthy();
  expect(screen.getByText(/testname/i)).toBeTruthy();
  expect(screen.getByText(/testtotal/i)).toBeTruthy();
});

test('"details" and "back" buttons work', () => {
  const initialState = {
    ordersReducer: [
      {
        id: 'testOrderId',
        'customer-id': 'testCustomerID',
        items: [],
        total: 'testTotal',
      },
    ],
    customersReducer: [
      {
        id: 'testCustomerID',
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
      <Router>
        <Route path="/orders">
          <Orders />
        </Route>
        <Redirect to="/orders" />
      </Router>
    </Provider>
  );

  fireEvent.click(screen.getByRole('link', { name: /details/i }));
  expect(screen.getByRole('link', { name: /back/i })).toBeTruthy();
  expect(screen.queryByRole('link', { name: /details/i })).toBeNull();

  fireEvent.click(screen.getByRole('link', { name: /back/i }));
  expect(screen.getByRole('link', { name: /details/i })).toBeTruthy();
  expect(screen.queryByRole('link', { name: /back/i })).toBeNull();
});
