// component to show individual product info on products page

// React imports
import PropTypes from 'prop-types';

// css imports
import '../css/ProductCard.css';
import AddProductForm from './AddProductForm';

const ProductCard = ({ productId, description, category, price }) => {
  return (
    <div className="product-card card text text-display">
      <div>{productId}</div>
      <div>{description}</div>
      <div>{category}</div>
      <div>€{price}</div>

      <AddProductForm productId={productId} price={price} />
    </div>
  );
};

ProductCard.propTypes = {
  productId: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductCard;
