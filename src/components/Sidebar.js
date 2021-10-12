// sidebar component, does not chane with router

// Router imports
import { Link } from 'react-router-dom';

// css imports
import '../css/Sidebar.css';

// component imports
import logo from '../assets/logo.svg';
import {
  IconUserMediumOutline,
  IconProductsMediumOutline,
  IconOverviewMediumOutline,
} from '@teamleader/ui-icons';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Teamleader Logo" />
      {/* link to customers page */}
      <Link to={'/'} className="side-item heading-1 heading">
        <IconUserMediumOutline className="side-item-icon" />
        Customers
      </Link>

      {/* link to orders page */}
      <Link to={'/orders'} className="side-item heading-1 heading">
        <IconOverviewMediumOutline className="side-item-icon" />
        Orders
      </Link>

      {/* link to products page */}
      <Link to={'/products'} className="side-item heading-1 heading">
        <IconProductsMediumOutline className="side-item-icon" />
        Products
      </Link>
    </div>
  );
};

export default Sidebar;
