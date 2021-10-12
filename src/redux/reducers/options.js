// handles order options states

// initial state (empty)
const INITIAL_STATE = [];

export const optionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_OPTION':
      // filters current state and changes the order option for the product.
      // returns complete array of products and their selected order option
      return [
        ...state.filter((e) => e.productId !== action.payload.productId),
        {
          productId: action.payload.productId,
          option: action.payload.order,
        },
      ];
    default:
      return state;
  }
};

export default optionsReducer;
