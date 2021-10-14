import ordersReducer from '../../redux/reducers/orders';

test('returns empty array while fetching data', () => {
  expect(
    ordersReducer(
      { orders: [], loading: false, error: null },
      { type: 'FETCH_ORDERS' }
    )
  ).toEqual({ orders: [], loading: true, error: null });
});

test('returns error if fetch fails', () => {
  expect(
    ordersReducer(
      { orders: [], loading: false, error: null },
      {
        type: 'FETCH_ORDERS_FAILED',
        payload: 'error',
      }
    )
  ).toEqual({ orders: [], loading: false, error: 'error' });
});

test('returns data array after fetching from server', () => {
  expect(
    ordersReducer(
      { orders: [], loading: false, error: null },
      {
        type: 'SET_ORDERS',
        payload: ['testOrder'],
      }
    )
  ).toEqual({ orders: ['testOrder'], loading: false, error: null });
});

test('changes quantity of product', () => {
  const INITIAL_STATE = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
          {
            'product-id': 'testProductId2',
            quantity: '2',
            'unit-price': '2',
            total: '4',
          },
        ],
        total: '5',
      },
    ],
    loading: false,
    error: null,
  };

  const action = {
    type: 'CHANGE_QUANTITY',
    payload: {
      orderId: 'testId1',
      productId: 'testProductId1',
      quantity: 2,
    },
  };

  const result = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '2.00',
            'unit-price': '1',
            total: '2.00',
          },
          {
            'product-id': 'testProductId2',
            quantity: '2',
            'unit-price': '2',
            total: '4',
          },
        ],
        total: '6.00',
      },
    ],
    loading: false,
    error: null,
  };

  expect(ordersReducer(INITIAL_STATE, action)).toEqual(result);
});

test('removes product based on id', () => {
  const INITIAL_STATE = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
          {
            'product-id': 'testProductId2',
            quantity: '2',
            'unit-price': '2',
            total: '4',
          },
        ],
        total: '5',
      },
    ],
    loading: false,
    error: null,
  };

  const action = {
    type: 'REMOVE_PRODUCT',
    payload: {
      orderId: 'testId1',
      productId: 'testProductId1',
    },
  };

  const result = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId2',
            quantity: '2',
            'unit-price': '2',
            total: '4',
          },
        ],
        total: '4.00',
      },
    ],
    loading: false,
    error: null,
  };

  expect(ordersReducer(INITIAL_STATE, action)).toEqual(result);
});

test('adds new product to order', () => {
  const INITIAL_STATE = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
        ],
        total: '1',
      },
    ],
    loading: false,
    error: null,
  };

  const action = {
    type: 'ADD_PRODUCT',
    payload: {
      orderId: 'testId1',
      productId: 'testProductId2',
      price: '2',
    },
  };

  const result = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
          {
            'product-id': 'testProductId2',
            quantity: '1',
            'unit-price': '2',
            total: '2',
          },
        ],
        total: '3.00',
      },
    ],
    loading: false,
    error: null,
  };

  expect(ordersReducer(INITIAL_STATE, action)).toEqual(result);
});

test("doesn't add existng product to order", () => {
  const INITIAL_STATE = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
        ],
        total: '1',
      },
    ],
    loading: false,
    error: null,
  };

  const action = {
    type: 'ADD_PRODUCT',
    payload: {
      orderId: 'testId1',
      productId: 'testProductId1',
      price: '1',
    },
  };

  const result = {
    orders: [
      {
        id: 'testId1',
        'customer-id': 'testCuatomerId',
        items: [
          {
            'product-id': 'testProductId1',
            quantity: '1',
            'unit-price': '1',
            total: '1',
          },
        ],
        total: '1',
      },
    ],
    loading: false,
    error: null,
  };

  expect(ordersReducer(INITIAL_STATE, action)).toEqual(result);
});

test('returns current state with no valid switch case', () => {
  expect(ordersReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
