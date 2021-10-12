// all actions relating to orders

// for fetching order data from API
export const fetchOrders = () => {
  return {
    type: 'FETCH_ORDERS',
  };
};

// for setting fetched data tp store
export const setOrders = (orders) => {
  return {
    type: 'SET_ORDERS',
    payload: orders,
  };
};

// for changing the quantity of a product in an order
export const changeQuantity = (orderId, productId, quantity) => {
  return {
    type: 'CHANGE_QUANTITY',
    payload: {
      orderId,
      productId,
      quantity,
    },
  };
};

// for removing a product from an order
export const removeProduct = (orderId, productId) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: {
      orderId,
      productId,
    },
  };
};

// for adding a product to an order
export const addProduct = (orderId, productId, price) => {
  return {
    type: 'ADD_PRODUCT',
    payload: { orderId, productId, price },
  };
};
