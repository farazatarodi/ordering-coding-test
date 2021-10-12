// main component of customers page

// Redux imports
import { useSelector } from 'react-redux';

// component imports
import CustomerCard from './CustomerCard';

// css imports
import '../css/Customers.css';

const Customers = () => {
  // get customers data from store
  const customers = useSelector((state) => state.customersReducer);

  return (
    <div className="customers-container">
      <h1 className="heading heading-1">Customers</h1>
      <div className="customers-content">
        <div className="customers-header heading heading-2">
          <strong>ID</strong>
          <strong>Name</strong>
          <strong>Since</strong>
          <strong>Revenue</strong>
        </div>
        {/* map customers data to individual card components */}
        {customers &&
          customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              since={customer.since}
              revenue={customer.revenue}
            />
          ))}
      </div>
    </div>
  );
};

export default Customers;
