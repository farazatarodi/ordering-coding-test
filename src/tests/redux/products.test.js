import productsReducer from '../../redux/reducers/products';

test('returns empty array while fetching from server', () => {
  expect(productsReducer([], { type: 'FETCH_PRODUCTS' })).toEqual([]);
});

test('returns data array after fetching from server', () => {
  expect(
    productsReducer([], {
      type: 'SET_PRODUCTS',
      payload: ['testProduct'],
    })
  ).toEqual(['testProduct']);
});

test('returns current state with no valid switch case', () => {
  expect(productsReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
