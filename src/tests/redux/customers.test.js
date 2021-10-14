import customersReducer from '../../redux/reducers/customers';

test('returns empty array while fetching from server', () => {
  expect(
    customersReducer(
      { customers: [], loading: false, error: null },
      { type: 'FETCH_CUSTOMERS' }
    )
  ).toEqual({ customers: [], loading: true, error: null });
});

test('returns error if fetch fails', () => {
  expect(
    customersReducer(
      { customers: [], loading: false, error: null },
      {
        type: 'FETCH_CUSTOMERS_FAILED',
        payload: 'error',
      }
    )
  ).toEqual({ customers: [], loading: false, error: 'error' });
});

test('returns data array after fetching from server', () => {
  expect(
    customersReducer(
      { customers: [] },
      {
        type: 'SET_CUSTOMERS',
        payload: [
          {
            id: 'testId',
            name: 'testname',
            since: 'testSince',
            revenue: 'testRevenue',
          },
        ],
      }
    )
  ).toEqual({
    customers: [
      {
        id: 'testId',
        name: 'testname',
        since: 'testSince',
        revenue: 'testRevenue',
      },
    ],
    loading: false,
    error: null,
  });
});

test('returns current state with no valid switch case', () => {
  expect(customersReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
