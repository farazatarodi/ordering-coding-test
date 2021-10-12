// Redux imports
import { useSelector } from 'react-redux';

const OrderDetail = ({ orderId }) => {
  // get order from store by order ID
  const [order] = useSelector((state) =>
    state.ordersReducer.filter((e) => e.id === orderId)
  );

  // get customer from store by customer ID
  const [customer] = useSelector((state) =>
    state.customersReducer.filter((e) => e.id === order['customer-id'])
  );

  return (
    <div className="text text-display order-details">
      <div>{order && order.id}</div>
      <div>{customer && customer.name}</div>
      <div>{customer && customer.id}</div>
      <div>€{order && order.total}</div>
    </div>
  );
};

export default OrderDetail;
