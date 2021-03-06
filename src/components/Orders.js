// main Orders page component

// Redux imports
import { useSelector } from 'react-redux';

// Router imports
import { Switch, Route, useRouteMatch } from 'react-router-dom';

// component imports
import OrderCard from './OrderCard';
import Order from './Order';
import EmptyCard from './EmptyCard';

// css imports
import '../css/Orders.css';
import LoadingCard from './LoadingCard';
import ErrorCard from './ErrorCard';

const Orders = () => {
  // gert all orders from store
  const ordersState = useSelector((state) => state.ordersReducer);
  const orders = ordersState.orders;
  const loading = ordersState.loading;
  const error = ordersState.error;

  // matching current address (/orders)
  const match = useRouteMatch();

  return (
    <div className="orders-container">
      <h1 className="heading heading-1">Orders</h1>
      {/* secondary switch affects the orders page */}
      <Switch>
        {
          // map orders to order routes, address is order ID
          orders &&
            orders.map((order) => (
              <Route key={order.id} path={`${match.path}/${order.id}`}>
                <Order id={order.id} />
              </Route>
            ))
        }

        {/* Orders page base route */}
        <Route path={match.path}>
          <div className="orders-content">
            <div className="orders-header heading heading-2">
              <strong>ID</strong>
              <strong>Customer</strong>
              <strong>Total</strong>
              <strong>Details</strong>
            </div>
            {
              // map orders to order card components
              loading ? (
                <LoadingCard /> // render loading card if loading
              ) : error ? (
                <ErrorCard error={error} /> // render error card if fetch failed
              ) : orders && orders.length !== 0 ? (
                orders.map((order) => (
                  <OrderCard
                    key={order.id}
                    total={order.total}
                    customerId={order['customer-id']}
                    orderId={order.id}
                  />
                ))
              ) : (
                <EmptyCard /> // render empty card if orders are empty
              )
            }
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Orders;
