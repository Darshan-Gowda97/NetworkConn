import React from 'react';
import NavItem from '../partials/NavItem';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import { GrCode } from 'react-icons/gr';
import { FaCode } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import showcase from '../../assets/Images/showcase.jpg';
import icon from '../../assets/Images/icon.png';

const NavData = {
  Developers: '/developers',
  Register: '/register',
  Login: '/login',
};

export const Landing = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  //let SideNav = window.location.pathname === '/' ? false : true;
  let SideNav = true;
  return (
    <BrowserRouter>
      <div>
        {SideNav ? (
          <div class="grid grid-cols-2">
            <div class="flex flex-row justify-start items-center px-32 gap-1 bg-overlay border-b-2 border-primary text-onSurface h-16">
              <IconContext.Provider value={{ color: 'white', size: '32px' }}>
                <div class="pt-1">
                  <FaCode />
                </div>
              </IconContext.Provider>

              <h1 class="text-2xl font-semibold text-white">DevConnector</h1>
            </div>

            <div class="flex bg-overlay justify-end items-center border-b-2 border-primary text-onSurface h-16">
              <ul class="flex gap-5 pr-12">
                {_.keys(NavData).map((key) => (
                  <NavItem
                    key={key}
                    name={key}
                    to={NavData[key]}
                    onClick={() => setShowMenu(!showMenu)}
                  />
                ))}
              </ul>
            </div>
          </div>
        ) : null}
        <div className="fixed w-full h-full">
          <img src={showcase} />
        </div>
      </div>
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Landing;
