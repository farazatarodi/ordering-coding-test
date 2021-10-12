import customersReducer from '../../redux/reducers/customers';

test('returns empty array while fetching from server', () => {
  expect(customersReducer([], { type: 'FETCH_CUSTOMERS' })).toEqual([]);
});

test('returns data array after fetching from server', () => {
  expect(
    customersReducer([], {
      type: 'SET_CUSTOMERS',
      payload: [
        {
          id: 'testId',
          name: 'testname',
          since: 'testSince',
          revenue: 'testRevenue',
        },
      ],
    })
  ).toEqual([
    {
      id: 'testId',
      name: 'testname',
      since: 'testSince',
      revenue: 'testRevenue',
    },
  ]);
});

test('returns current state with no valid switch case', () => {
  expect(customersReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
