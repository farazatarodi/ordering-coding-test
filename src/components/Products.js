// main products page component

// Redux imports
import { useSelector } from 'react-redux';

// component imports
import ProductCard from './ProductCard';
import EmptyCard from './EmptyCard';

// css imports
import '../css/Products.css';
import LoadingCard from './LoadingCard';
import ErrorCard from './ErrorCard';

const Products = () => {
  // get all products from store
  const productsState = useSelector((state) => state.productsReducer);
  const products = productsState.products;
  const loading = productsState.loading;
  const error = productsState.error;

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
          loading ? (
            <LoadingCard /> // render loading card if loading
          ) : error ? (
            <ErrorCard error={error} /> // render error card if fetch failed
          ) : products && products.length !== 0 ? (
            products.map((product) => (
              <ProductCard
                key={product.id}
                productId={product.id}
                description={product.description}
                category={product.category}
                price={product.price}
              />
            ))
          ) : (
            <EmptyCard /> // render empty card if no products
          )
        }
      </div>
    </div>
  );
};

export default Products;
