import optionsReducer from '../../redux/reducers/options';

test('returns product and selected option on change action', () => {
  expect(
    optionsReducer([], {
      type: 'CHANGE_OPTION',
      payload: { productId: 'testProductId', order: 'testOrder' },
    })
  ).toEqual([{ productId: 'testProductId', option: 'testOrder' }]);
});

test('changes exisiting product option', () => {
  expect(
    optionsReducer(
      [
        { productId: 'testProductId1', option: 'testOrder1' },
        { productId: 'testProductId2', option: 'testOrder2' },
      ],
      {
        type: 'CHANGE_OPTION',
        payload: { productId: 'testProductId1', order: 'testOrder3' },
      }
    )
  ).toEqual([
    { productId: 'testProductId2', option: 'testOrder2' },
    { productId: 'testProductId1', option: 'testOrder3' },
  ]);
});

test('returns current state with no valid switch case', () => {
  expect(optionsReducer(['test state'], { type: 'TEST_TYPE' })).toEqual([
    'test state',
  ]);
});
