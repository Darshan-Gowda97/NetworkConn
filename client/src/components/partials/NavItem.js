import { NavLink } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        exact
        activeClassName=" block text-primary text-lg hover:text-primary "
        onClick={props.onClick}
        className="lg:py-2 py-2 block text-lg  hover:text-primary "
        to={props.to}
      >
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
