// Redux-Saga imports
import { call, put, takeLatest } from 'redux-saga/effects';
import getApi from './getApi';

// Redux imports
import { setProducts, fetchProductsFailed } from '../actions/products';

// data imports
import mockProducts from '../../api/data/products.json';

const productsUrl = '';

// The generator function that calls the getApi function and dispatched the response to Redux
function* fetchProducts() {
  try {
    const products = productsUrl
      ? yield call(getApi(productsUrl))
      : mockProducts;
    yield put(setProducts(products));
  } catch (e) {
    put(fetchProductsFailed(e)); // in case of an error the data is set to an empty array, it can be changed to output an error or a message
  }
}

// The generator function that is listening for FETCH_PRODUCTS action dispatch
function* productsSaga() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

export default productsSaga;
