// Redux-Saga imports
import { call, put, takeLatest } from 'redux-saga/effects';
import getApi from './getApi';

// Redux imports
import { setOrders } from '../actions/orders';

// data imports
import mockOrders from '../../api/example-orders';

const ordersUrl = '';

// The generator function that calls the getApi function and dispatched the response to Redux
function* fetchOrders() {
  try {
    const orders = ordersUrl ? yield call(getApi(ordersUrl)) : mockOrders;
    yield put(setOrders(orders));
  } catch (e) {
    put(setOrders([])); // in case of an error the data is set to an empty array, it can be changed to output an error or a message
  }
}

// The generator function that is listening for FETCH_ORDERS action dispatch
function* ordersSaga() {
  yield takeLatest('FETCH_ORDERS', fetchOrders);
}

export default ordersSaga;
