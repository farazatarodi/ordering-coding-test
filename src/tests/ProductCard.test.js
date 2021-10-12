import { render, screen } from '@testing-library/react';

import ProductCard from '../components/ProductCard';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

test('wrong prop types still render in customer card', () => {
  const initialState = {
    optionsReducer: [],
  };
  const mockStore = configureStore();

  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <ProductCard
        productId={1}
        description={'testdescription'}
        category={'testcategory'}
        price={'testprice'}
      />
    </Provider>
  );

  expect(screen.getByText(/1/i)).toBeTruthy();
});
