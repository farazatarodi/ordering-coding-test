// handles products states

// Initial state (empty)
const INITIAL_STATE = { products: [], loading: false, error: null };

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      // Returns current state while fetching
      return { ...state, loading: true };

    case 'FETCH_PRODUCTS_FAILED':
      // Return error with an empty array
      return { ...state, loading: false, error: action.payload };

    case 'SET_PRODUCTS':
      // Returns the fetched data
      return { products: action.payload, loading: false, error: null };

    default:
      return state;
  }
};

export default productsReducer;
