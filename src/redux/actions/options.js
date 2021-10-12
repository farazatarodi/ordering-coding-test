// actions relating to order options on products page

// for changing the selected order for a product
export const changeOption = (productId, order) => {
  return {
    type: 'CHANGE_OPTION',
    payload: { productId, order },
  };
};
