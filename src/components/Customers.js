// main component of customers page

// Redux imports
import { useSelector } from 'react-redux';

// component imports
import CustomerCard from './CustomerCard';
import EmptyCard from './EmptyCard';
import LoadingCard from './LoadingCard';

// css imports
import '../css/Customers.css';
import ErrorCard from './ErrorCard';

const Customers = () => {
  // get customers data from store
  const customersState = useSelector((state) => state.customersReducer);
  const customers = customersState.customers;
  const loading = customersState.loading;
  const error = customersState.error;

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
        {loading ? ( // check if loading.
          <LoadingCard /> // render loading card if loading.
        ) : error ? ( // check if fetching has error.
          <ErrorCard error={error} /> // render error card if error.
        ) : customers && customers.length !== 0 ? ( // check if we have customers and it is not empty.
          customers.map((customer) => (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              name={customer.name}
              since={customer.since}
              revenue={customer.revenue}
            />
          ))
        ) : (
          <EmptyCard /> // render empty card if no customers
        )}
      </div>
    </div>
  );
};

export default Customers;
