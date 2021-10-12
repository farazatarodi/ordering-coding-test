/* order selection dropdown:
- intention was to use a form but it caused unwanted refreshes on submit.
- the state of the dropdown is stored in the store and the form's onSubmit requires extra code to access the state. 
- the select tag sets the state on change.
- default value of select is '0' and is disabled*/

// React imports
import PropTypes from 'prop-types';

// Redux imports
import { changeOption } from '../redux/actions/options';
import { addProduct } from '../redux/actions/orders';
import { useSelector, useDispatch } from 'react-redux';

// css imports
import '../css/AddProductForm.css';

const AddProductForm = ({ productId, price }) => {
  // get all orders from the store to display in the dropdown menu
  const orders = useSelector((state) => state.ordersReducer);

  // prepare dispatch for callback
  const dispatch = useDispatch();

  // get selected order option for the product (may be undefined as an option has not been selected yet)
  const [selectedOption] = useSelector((state) =>
    state.optionsReducer.filter((e) => e.productId === productId)
  );

  return (
    <div className="product-add">
      <select
        className="text text-display"
        onChange={(e) => {
          dispatch(changeOption(productId, e.target.value));
        }}
        defaultValue={0}
      >
        <option disabled="disabled" value={0}>
          Select order
        </option>
        {
          // map orders to switch options
          orders &&
            orders.map((order) => (
              <option
                key={order.id}
                value={order.id}
              >{`Order ${order.id}`}</option>
            ))
        }
      </select>
      {/* button to add the current product to the selected order */}
      <button
        className="text text-display btn add-btn"
        onClick={() => {
          dispatch(addProduct(selectedOption.option, productId, price));
        }}
        disabled={
          // disabled if an option is not selected
          !selectedOption
        }
        style={
          !selectedOption
            ? {
                backgroundColor: 'var(--color-mint-light)',
                cursor: 'default',
              }
            : {}
        }
      >
        Add
      </button>
    </div>
  );
};

AddProductForm.propTypes = {
  productId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default AddProductForm;
