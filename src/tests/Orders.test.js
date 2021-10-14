import { render, screen, fireEvent } from '@testing-library/react';

import Orders from '../components/Orders';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import renderer from 'react-test-renderer';

test('we see the empty table in orders page', () => {
  const initialState = { ordersReducer: { orders: [] } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <Router>
        <Orders />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/nothing/i)).toBeTruthy();
});

test('order card shows all info correctly', () => {
  const initialState = {
    ordersReducer: {
      orders: [
        {
          id: 'testOrderId',
          'customer-id': 'testCustomerID',
          items: [],
          total: 'testTotal',
        },
      ],
    },
    customersReducer: {
      customers: [
        {
          id: 'testCustomerID',
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
    ordersReducer: {
      orders: [
        {
          id: 'testOrderId',
          'customer-id': 'testCustomerID',
          items: [],
          total: 'testTotal',
        },
      ],
    },
    customersReducer: {
      customers: [
        {
          id: 'testCustomerID',
          name: 'testName',
          since: 'testSince',
          revenue: 'testRevenue',
        },
      ],
    },
    productsReducer: {
      products: [],
    },
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

test('we see the loading card while fetching data', () => {
  const initialState = {
    ordersReducer: {
      orders: [],
      loading: true,
      error: null,
    },
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

  expect(screen.getByText(/Loading/i)).toBeTruthy();
});

test('we see the error data if fetch fails', () => {
  const initialState = {
    ordersReducer: {
      orders: [],
      loading: false,
      error: 'testError',
    },
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

  expect(screen.getByText(/Error Fetching Data: testError/i)).toBeTruthy();
});

test('renders correclty', () => {
  const initialState = {
    customersReducer: { customers: [] },
    ordersReducer: { orders: [] },
    productsReducer: { products: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);
  const tree = renderer
    .create(
      <Provider store={store}>
        <Router>
          <Orders />
        </Router>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
