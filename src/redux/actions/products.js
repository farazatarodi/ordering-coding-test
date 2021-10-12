// all actions relating to products

// for fetching products data from API
export const fetchProducts = () => {
  return {
    type: 'FETCH_PRODUCTS',
  };
};

// for setting fetched data to store
export const setProducts = (products) => {
  return {
    type: 'SET_PRODUCTS',
    payload: products,
  };
};
