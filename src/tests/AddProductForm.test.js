import { render, screen } from '@testing-library/react';

import AddProductForm from '../components/AddProductForm';

import { Provider } from 'react-redux';

import configureStore from 'redux-mock-store';

test('dropdown shows all orders', () => {
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
    ordersReducer: {
      orders: [
        {
          id: 'testId1',
        },
        {
          id: 'testId2',
        },
        {
          id: 'testId3',
        },
      ],
    },
    optionsReducer: [],
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <AddProductForm productId={'testProductId'} price={'testPrice'} />
    </Provider>
  );

  expect(screen.getAllByText(/testid/i)).toHaveLength(3);
});

test('button is disabled when option not selected', () => {
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
    ordersReducer: { orders: [] },
    optionsReducer: [],
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <AddProductForm productId={'testProductId'} price={'testPrice'} />
    </Provider>
  );

  expect(screen.getByRole('button', { name: /add/i })).toBeDisabled();
});

test('button is enabled when option is selected', () => {
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
    ordersReducer: {
      orders: [],
    },
    optionsReducer: [{ productId: 'testProductId', option: 'testOption' }],
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <AddProductForm productId={'testProductId'} price={'testPrice'} />
    </Provider>
  );

  expect(screen.getByRole('button', { name: /add/i })).toBeEnabled();
});
