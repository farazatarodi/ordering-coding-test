// reducer imports
import customersReducer from './customers';
import productsReducer from './products';
import ordersReducer from './orders';
import optionsReducer from './options';

// Redux imports
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  customersReducer,
  productsReducer,
  ordersReducer,
  optionsReducer,
});

export default rootReducer;
