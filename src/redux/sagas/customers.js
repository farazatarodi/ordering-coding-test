// Redux-Saga imports
import { call, put, takeLatest } from 'redux-saga/effects';
import getApi from './getApi';

// Redux imports
import { setCustomers } from '../actions/customers';

// data imports
import mockCustomers from '../../api/data/customers.json';

const customersUrl = '';

// The generator function that calls the getApi function and dispatched the response to Redux
function* fetchCustomers() {
  try {
    const customers = customersUrl
      ? yield call(getApi(customersUrl))
      : mockCustomers;
    yield put(setCustomers(customers));
  } catch (e) {
    put(setCustomers([])); // in case of an error the data is set to an empty array, it can be changed to output an error or a message
  }
}

// The generator function that is listening for FETCH_CUSTOMERS action dispatch
function* customersSaga() {
  yield takeLatest('FETCH_CUSTOMERS', fetchCustomers);
}

export default customersSaga;
