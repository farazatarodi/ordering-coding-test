// component for individual order

// React imports
import PropTypes from 'prop-types';

// Router imports
import { Link } from 'react-router-dom';

// Redux imports
import { useSelector } from 'react-redux';

// component import
import Items from './Items';
import PlaceButton from './PlaceButton';

// css imports
import '../css/Order.css';

const Order = ({ id }) => {
  // get order from store by order ID
  const [order] = useSelector((state) =>
    state.ordersReducer.filter((e) => e.id === id)
  );

  // get customer from store by customer ID
  const [customer] = useSelector((state) =>
    state.customersReducer.customers.filter(
      (e) => e.id === order['customer-id']
    )
  );

  return (
    <div className="order-container">
      {/* link to main orders page */}
      <Link to="/orders" className="text text-display">
        {'< BACK'}
      </Link>
      <div className="order-content">
        <div className="order-header heading heading-2">
          <strong>Order ID</strong>
          <strong>Customer Name</strong>
          <strong>Customer ID</strong>
          <strong>Total</strong>
        </div>
        <div className="text text-display order-details">
          <div>{order && order.id}</div>
          <div>{customer && customer.name}</div>
          <div>{customer && customer.id}</div>
          <div>€{order && order.total}</div>
        </div>
      </div>

      {/* component that contains items */}
      <Items order={order} />

      {/* component that contains place order button and its logic */}
      <PlaceButton order={order} />
    </div>
  );
};

Order.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Order;
