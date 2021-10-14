// component that shows items in the order detail page

// React imports
import PropTypes from 'prop-types';

// Redux imports
import { useSelector } from 'react-redux';

// component imports
import ItemCard from './ItemCard';
import EmptyCard from './EmptyCard';

// css imports
import '../css/Items.css';

// complete order is passed as prop to use order ID in item cards
const Items = ({ order }) => {
  // get all products from store to pass down to item card.
  // in this situation it was preferred to access the store once for all items
  // instead of accessing it for each item card.
  // this decision may change based on the scale of products, orders and items
  const allProducts = useSelector((state) => state.productsReducer.products);

  const items = order && order.items;

  return (
    <div className="items-container text text-display">
      <div className="items-header heading heading-2">
        <strong>ID</strong>
        <strong>Description</strong>
        <strong>Quantity</strong>
        <strong>Unit Price</strong>
        <strong>Total</strong>
      </div>
      {/* map order items data to item card components */}
      {items && items.length !== 0 ? (
        items.map((item) => (
          <ItemCard
            key={item['product-id']}
            allProducts={allProducts}
            item={item}
            orderId={order.id}
          />
        ))
      ) : (
        <EmptyCard />
      )}
    </div>
  );
};

Items.propTypes = {
  order: PropTypes.object.isRequired,
};

export default Items;
