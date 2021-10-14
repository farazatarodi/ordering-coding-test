// all actions relating to products

// for fetching products data from API
export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS',
  };
};

// for fetching the error from api
export const fetchProductsFailed = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILED',
    payload: error,
  };
};

// for setting fetched data to store
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};
