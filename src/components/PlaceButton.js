// button component that is responsible for placing the order

// React imports
import PropTypes from 'prop-types';

const PlaceButton = ({ order }) => {
  // API URL
  const postUrl = '';

  const items = order && order.items;

  // async function for post request
  const placeOrder = async () => {
    // check if API URL is available, can be removed in the presence of backend
    if (postUrl) {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      // assumed response codes are standard
      response.status === 200
        ? alert('Order placed!')
        : alert(`Order failed!<br>Error: ${response.status}`);
    } else {
      // mock response for demonstration purposes
      alert('Order placed!');
      console.log(order);
    }
  };

  return (
    // button checks if order is empty
    <button
      className="btn text text-display"
      onClick={() => {
        placeOrder();
      }}
      disabled={items && items.length === 0}
      style={
        items && items.length === 0
          ? {
              backgroundColor: 'var(--color-mint-light)',
              cursor: 'default',
            }
          : {}
      }
    >
      {items && items.length !== 0 ? 'Place Order' : 'Order is empty'}
    </button>
  );
};

PlaceButton.propTypes = {
  order: PropTypes.object.isRequired,
};

export default PlaceButton;
