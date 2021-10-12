// handles products states

// Initial state (empty)
const INITIAL_STATE = [];

const ordersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_ORDERS':
      // Returns current state while fetching
      return state;

    case 'SET_ORDERS':
      // Returns the fetched data
      return action.payload;

    case 'CHANGE_QUANTITY': {
      // get order based on order ID provided by the action payload
      const [order] = state.filter((e) => e.id === action.payload.orderId);

      // get product in the order based on product ID provided by the action payload
      const [product] = order.items.filter(
        (e) => e['product-id'] === action.payload.productId
      );

      // save current quantity for calculations
      const oldQty = parseInt(product.quantity, 10);

      // get current total of the product
      const productTotal = parseFloat(product.total);

      // get current total of the order
      const total = parseFloat(order.total);

      // get unit price of the product
      const price = parseFloat(product['unit-price']);

      // get new quantity from action payload
      const newQty = action.payload.quantity;

      // calculate new total of the product
      const newProductTotal = Math.abs(
        productTotal + (newQty - oldQty) * price
      );

      // calculate new total of the order
      const newTotal = Math.abs(total + (newQty - oldQty) * price);

      // create new items array with new calculated values
      const newItems = order.items.map((e) =>
        e['product-id'] === action.payload.productId
          ? {
              ...e,
              quantity: newQty.toFixed(2),
              total: newProductTotal.toFixed(2),
            }
          : e
      );

      // create new order object with new items and total
      const newOrder = {
        ...order,
        items: newItems,
        total: newTotal.toFixed(2),
      };

      return state.map((e) => (e.id === action.payload.orderId ? newOrder : e));
    }

    case 'REMOVE_PRODUCT': {
      // get order based on order ID provided by the action payload
      const [order] = state.filter((e) => e.id === action.payload.orderId);

      // get product in the order based on product ID provided by the action payload
      const [product] = order.items.filter(
        (e) => e['product-id'] === action.payload.productId
      );

      // get current total of the order
      const total = parseFloat(order.total);

      // get unit price of the product
      const price = parseFloat(product['unit-price']);

      // save current quantity for calculations
      const Qty = parseInt(product.quantity, 10);

      // calculate new total of the order
      const newTotal = Math.abs(total - Qty * price);

      // create new items array by filtering out the product
      const newItems = order.items.filter(
        (e) => e['product-id'] !== action.payload.productId
      );

      // create new order object with new items and total
      const newOrder = {
        ...order,
        items: newItems,
        total: newTotal.toFixed(2),
      };

      return state.map((e) => (e.id === action.payload.orderId ? newOrder : e));
    }

    case 'ADD_PRODUCT': {
      // get order based on order ID provided by the action payload
      const [order] = state.filter((e) => e.id === action.payload.orderId);

      // get product in the order based on product ID provided by the action payload
      const [product] = order.items.filter(
        (e) => e['product-id'] === action.payload.productId
      );

      // get current total of the order
      const total = parseFloat(order.total);

      // check if product is not already in the order
      if (!product) {
        // create new items array with new calculated values
        const newItems = [
          ...order.items.filter(
            (e) => e['product-id'] !== action.payload.productId
          ),
          {
            'product-id': action.payload.productId,
            quantity: '1',
            'unit-price': action.payload.price,
            total: action.payload.price,
          },
        ];

        // calculate new total of the order
        const newTotal = total + parseFloat(action.payload.price);

        // create new order object with new items and total
        const newOrder = {
          ...order,
          items: newItems,
          total: newTotal.toFixed(2),
        };

        alert(
          `Product ${action.payload.productId} was added to order ${action.payload.orderId}`
        );

        return state.map((e) =>
          e.id === action.payload.orderId ? newOrder : e
        );
      } else {
        // alert if product is in order
        alert('Product is already in the order');
        return state;
      }
    }
    default:
      return state;
  }
};

export default ordersReducer;
