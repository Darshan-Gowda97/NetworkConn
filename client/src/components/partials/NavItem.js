import { NavLink } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const NavItem = (props) => {
  let icon;
  if (props.name === 'Dashboard') {
    icon = <BsFillPersonFill size={18} />;
  } else if (props.name === 'Logout') {
    icon = <BiLogOut size={18} />;
  } else if (props.name === 'DevConnector') {
    icon = (
      <IconContext.Provider value={{ color: 'white', size: '32px' }}>
        <FaCode />
      </IconContext.Provider>
    );
  } else {
    icon = null;
  }
  return (
    <li>
      <NavLink
        exact
        activeClassName=" block text-primary text-lg hover:text-primary "
        onClick={props.name === 'Logout' ? props.onClick : () => {}}
        className={
          'block flex justify-center items-center gap-1  hover:text-primary text-' +
          props.size
        }
        to={props.to}
      >
        <div className="pt-1">{icon}</div>
        {props.name}
      </NavLink>
    </li>
  );
};

export default NavItem;
