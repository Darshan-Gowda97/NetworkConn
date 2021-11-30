import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <li>
      <NavLink
        exact
        activeClassName="lg:py-7 py-2 block text-primary text-lg hover:text-primary "
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
