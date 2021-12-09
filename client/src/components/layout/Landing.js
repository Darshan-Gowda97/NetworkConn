import React, { useEffect } from 'react';
import NavItem from '../partials/NavItem';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from '../dashboard/Dashboard';
import { FaCode } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import Login from '../auth/Login';
import Register from '../auth/Register';
import Alert from './Alert';
import setAuthToken from '../../utils/setAuthToken';
import { loadUser } from '../../actions/auth';
import store from '../../state/store';
//Redux
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { logout } from '../../actions/auth';
import PrivateRoute from '../routing/PrivateRoute';

const NavData = {
  Developers: '/developers',
  Register: '/register',
  Login: '/login',
};

const NavData1 = {
  Logout: '/',
};

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Landing = ({ loading, isAuthenticated, logout }) => {
  const [showMenu, setShowMenu] = React.useState(false);

  //let SideNav = window.location.pathname === '/' ? false : true;
  let SideNav = true;

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <BrowserRouter>
        {SideNav ? (
          <div class=" h-full w-full flex grid lg:grid-cols-2 grid-cols-1 bg-onPrimary">
            <div class="flex lg:flex-row flex-row lg:justify-start justify-center items-center lg:px-32 gap-1 lg:pt-0 pt-2 lg:border-b-2 border-primary text-onSurface lg:h-16">
              <IconContext.Provider value={{ color: 'white', size: '32px' }}>
                <div class="pt-1">
                  <FaCode />
                </div>
              </IconContext.Provider>

              <h1 class="text-2xl font-semibold text-white">DevConnector</h1>
            </div>

            <div class="flex  lg:justify-end justify-center items-center  border-b-2 border-primary text-onSurface h-16">
              {!loading &&
                (isAuthenticated ? (
                  <div className="flex justify-center items-center gap-1">
                    <BiLogOut size={18} />
                    <ul class="flex gap-5 lg:pr-12">
                      {_.keys(NavData1).map((key) => (
                        <NavItem
                          key={key}
                          name={key}
                          to={NavData1[key]}
                          onClick={logout}
                        />
                      ))}
                    </ul>
                  </div>
                ) : (
                  <ul class="flex gap-5 lg:pr-12">
                    {_.keys(NavData).map((key) => (
                      <NavItem
                        key={key}
                        name={key}
                        to={NavData[key]}
                        onClick={() => setShowMenu(!showMenu)}
                      />
                    ))}
                  </ul>
                ))}
            </div>
          </div>
        ) : null}
        <Alert />

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

Landing.propTypes = {
  logout: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading,
  };
  //auth: state.auth,
};

export default connect(mapStateToProps, { logout })(Landing);
