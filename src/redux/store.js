// Redux imports
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';

// Redux-Saga imports
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// saga middleware
const sagaMiddleware = createSagaMiddleware();

// Redux devtools enhancer, can be removed if not used
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// runs the rootSaga, watching for provided actions
sagaMiddleware.run(rootSaga);

export default store;
