import { render, screen, fireEvent } from '@testing-library/react';

import Order from '../components/Order';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import { BrowserRouter as Router } from 'react-router-dom';

const initialState = { ordersReducer: [], customersReducer: [] };
const mockStore = configureStore();
const store = mockStore(initialState);

test('detail table is visibile in order page', () => {
  render(
    <Provider store={store}>
      <Router>
        <Order />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/order id/i)).toBeTruthy();
  expect(screen.getByText(/€/i)).toBeTruthy();
});

test('empty item table is visible', () => {
  render(
    <Provider store={store}>
      <Router>
        <Order />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/description/i)).toBeTruthy();
  expect(screen.queryByRole('link', { name: /delete/i })).toBeNull();
});
