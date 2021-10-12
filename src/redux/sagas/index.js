// redux-saga
import { all } from '@redux-saga/core/effects';
import customersSaga from './customers';
import ordersSaga from './orders';
import productsSaga from './products';

export default function* rootSaga() {
  yield all([customersSaga(), ordersSaga(), productsSaga()]);
}
