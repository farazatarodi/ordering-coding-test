// all actions relating to customers data

// for fetching customer data from API
export const fetchCustomers = () => {
  return {
    type: 'FETCH_CUSTOMERS',
  };
};

// for fetching the error from api
export const fetchCustomersFailed = (error) => {
  return {
    type: 'FETCH_CUSTOMERS_FAILED',
    payload: error,
  };
};

// for setting the fetched data to store
export const setCustomers = (customers) => {
  return {
    type: 'SET_CUSTOMERS',
    payload: customers,
  };
};
