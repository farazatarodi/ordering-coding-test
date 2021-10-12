// component for individual items in the order

// React imports
import PropTypes from 'prop-types';

// component imports
import CounterInput from 'react-counter-input';

// Redux imports
import { changeQuantity, removeProduct } from '../redux/actions/orders';
import { useDispatch } from 'react-redux';

// css imports
import '../css/ItemCard.css';

const ItemCard = ({ allProducts, item, orderId }) => {
  // prepare dispatch for callback
  const dispatch = useDispatch();

  // get item quantity and convert to number
  const qty = parseInt(item.quantity, 10);

  return (
    <div className="item-container">
      <div>{item['product-id']}</div>
      <div>
        {
          // filter all products based on item ID and show the description
          allProducts.filter((e) => e.id === item['product-id'])[0].description
        }
      </div>
      <div>
        {/* changes item quantity on change using dispatch
            based on order ID, product ID and quantity */}
        <CounterInput
          count={qty}
          min={0}
          onCountChange={(count) =>
            dispatch(changeQuantity(orderId, item['product-id'], count))
          }
        />
      </div>
      <div>€{item['unit-price']}</div>
      <div>€{item.total}</div>

      {/* removes item based on order ID and product ID */}
      <button
        className="btn text text-display"
        onClick={() => dispatch(removeProduct(orderId, item['product-id']))}
      >
        Delete
      </button>
    </div>
  );
};

ItemCard.propTypes = {
  allProducts: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  orderId: PropTypes.string.isRequired,
};

export default ItemCard;
