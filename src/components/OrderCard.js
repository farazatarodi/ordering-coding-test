// component to display individual order data in orders page

// React imports
import PropTypes from 'prop-types';

// Redux imports
import { useSelector } from 'react-redux';

// Router imports
import { Link, useRouteMatch } from 'react-router-dom';

// css imports
import '../css/OrderCard.css';

const OrderCard = ({ total, customerId, orderId }) => {
  // get customer data based on customer ID
  const [customer] = useSelector((state) =>
    state.customersReducer.filter((e) => e.id === customerId)
  );

  // match current address
  const match = useRouteMatch();

  return (
    <div className="card text text-display">
      <div>{orderId}</div>
      <div>{customer && customer.name}</div>
      <div>€{total}</div>

      {/* link to details page (Order component) */}
      <Link to={`${match.path}/${orderId}`}>Details</Link>
    </div>
  );
};

OrderCard.propTypes = {
  total: PropTypes.string.isRequired,
  customerId: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default OrderCard;
