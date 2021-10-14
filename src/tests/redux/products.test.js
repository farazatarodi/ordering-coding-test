import productsReducer from '../../redux/reducers/products';

test('returns empty array while fetching from server', () => {
  expect(
    productsReducer(
      { products: [], loading: false, error: null },
      { type: 'FETCH_PRODUCTS' }
    )
  ).toEqual({ products: [], loading: true, error: null });
});

test('returns error if fetch fails', () => {
  expect(
    productsReducer(
      { products: [], loading: false, error: null },
      {
        type: 'FETCH_PRODUCTS_FAILED',
        payload: 'error',
      }
    )
  ).toEqual({ products: [], loading: false, error: 'error' });
});

test('returns data array after fetching from server', () => {
  expect(
    productsReducer(
      { products: [], loading: false, error: null },
      {
        type: 'SET_PRODUCTS',
        payload: ['testProduct'],
      }
    )
  ).toEqual({ products: ['testProduct'], loading: false, error: null });
});

test('returns current state with no valid switch case', () => {
  expect(productsReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
