// handles products states

// Initial state (empty)
const INITIAL_STATE = [];

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      // Returns current state while fetching
      return state;

    case 'SET_PRODUCTS':
      // Returns the fetched data
      return action.payload;

    default:
      return state;
  }
};

export default productsReducer;
