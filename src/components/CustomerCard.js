// component to display individual customer and their data
// Used in the Customers page

// React imports
import PropTypes from 'prop-types';

// customer prop was deconstructed for type control
const CustomerCard = ({ id, name, since, revenue }) => {
  return (
    <div className="card text text-display">
      <div>{id}</div>
      <div>{name}</div>
      <div>{since}</div>
      <div>€{revenue}</div>
    </div>
  );
};

CustomerCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  since: PropTypes.string.isRequired,
  revenue: PropTypes.string.isRequired,
};

export default CustomerCard;
