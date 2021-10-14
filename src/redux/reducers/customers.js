// handles products states

// Initial state (empty)
const INITIAL_STATE = [
  {
    customers: [],
    loading: false,
    error: null,
  },
];

const customersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS':
      // Returns current state while fetching
      return { ...state, loading: true };

    case 'FETCH_CUSTOMERS_FAILED':
      //returns error and empty data
      return { customers: [], loading: false, error: action.payload };

    case 'SET_CUSTOMERS':
      // Returns the fetched data
      return { customers: action.payload, loading: false, error: null };

    default:
      return state;
  }
};

export default customersReducer;
