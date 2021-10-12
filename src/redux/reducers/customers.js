// handles products states

// Initial state (empty)
const INITIAL_STATE = [];

const customersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_CUSTOMERS':
      // Returns current state while fetching
      return state;

    case 'SET_CUSTOMERS':
      // Returns the fetched data
      return action.payload;

    default:
      return state;
  }
};

export default customersReducer;
