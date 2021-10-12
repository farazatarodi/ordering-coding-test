// React imports
import { useEffect } from 'react';

// Router imports
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

// Redux imports
import { useDispatch } from 'react-redux';
import { fetchCustomers } from '../redux/actions/customers';
import { fetchOrders } from '../redux/actions/orders';
import { fetchProducts } from '../redux/actions/products';

// component imports
import Customers from './Customers';
import Orders from './Orders';
import Products from './Products';
import Sidebar from './Sidebar';

// css imports
import '../css/App.css';

function App() {
  // prepare dispatch for callback use
  const dispatch = useDispatch();

  // fetch customers, orders and products when the app loads
  useEffect(() => {
    dispatch(fetchCustomers());
    dispatch(fetchOrders());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="content">
          {/* main switch only changes the content section */}
          <Switch>
            {/* Orders page */}
            <Route path="/orders">
              <Orders />
            </Route>

            {/* Products page */}
            <Route path="/products">
              <Products />
            </Route>

            {/* Customers page (homepage) */}
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
