import { render, screen } from '@testing-library/react';

import OrderCard from '../components/OrderCard';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { BrowserRouter as Router } from 'react-router-dom';

const initialState = { customersReducer: [] };
const mockStore = configureStore();

const store = mockStore(initialState);

test('wrong prop types still render in order card', () => {
  render(
    <Provider store={store}>
      <Router>
        <OrderCard total={1} customerId={true} orderId={0} />
      </Router>
    </Provider>
  );

  expect(screen.getByText(/1/i)).toBeTruthy();
  expect(screen.queryByText(/true/i)).toBeNull();
  expect(screen.getByText(/0/i)).toBeTruthy();
});
