// main products page component

// Redux imports
import { useSelector } from 'react-redux';

// component imports
import ProductCard from './ProductCard';

// css imports
import '../css/Products.css';

const Products = () => {
  // get all products from store
  const products = useSelector((state) => state.productsReducer);

  return (
    <div className="products-container">
      <h1 className="heading heading-1">Products</h1>
      <div className="products-content">
        <div className="products-header heading heading-2">
          <strong>ID</strong>
          <strong>Description</strong>
          <strong>Category</strong>
          <strong>Price</strong>
          <strong>Add to order</strong>
        </div>
        {
          // map products to product components
          products &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                description={product.description}
                category={product.category}
                price={product.price}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Products;
