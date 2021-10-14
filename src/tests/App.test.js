import { render, screen, fireEvent } from '@testing-library/react';

import App from '../components/App';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

import renderer from 'react-test-renderer';

test('on app open we see sidebar and customers page', () => {
  const initialState = { customersReducer: { customers: [] } };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getAllByText(/customers/i)).toHaveLength(2);
});

test('we can navigate through different pages', () => {
  const initialState = {
    customersReducer: { customers: [] },
    ordersReducer: { orders: [] },
    productsReducer: { products: [] },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  fireEvent.click(screen.getByRole('link', { name: /orders/i }));
  expect(screen.getAllByText(/orders/i)).toHaveLength(2);

  fireEvent.click(screen.getByRole('link', { name: /products/i }));
  expect(screen.getAllByText(/products/i)).toHaveLength(2);
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
        <App />
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
