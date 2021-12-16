import React, { useEffect } from 'react';
import NavItem from '../partials/NavItem';
import _ from 'lodash';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
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
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';

const NavData = {
  Developers: '/profiles',
  Register: '/register',
  Login: '/login',
};

const NavData1 = {
  Developers: '/profiles',
  Dashboard: '/dashboard',
  Logout: '/',
};

const NavData2 = {
  DevConnector: '/',
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
          <div class="h-full w-full flex grid lg:grid-cols-2 grid-cols-1 bg-onPrimary">
            <div class="flex lg:flex-row flex-row lg:justify-start justify-center items-center lg:px-32 gap-1 lg:pt-0 pt-2 lg:border-b-2 border-primary text-onSurface lg:h-16">
              <ul class="text-2xl font-semibold text-white">
                {_.keys(NavData2).map((key) => (
                  <NavItem key={key} name={key} to={NavData2[key]} size="2xl" />
                ))}
              </ul>
            </div>

            <div class="flex  lg:justify-end justify-center items-center  border-b-2 border-primary text-onSurface h-16">
              {!loading &&
                (isAuthenticated ? (
                  <div className="flex justify-center items-center gap-1">
                    <ul class="flex gap-5 lg:pr-12">
                      {_.keys(NavData1).map((key) => (
                        <NavItem
                          key={key}
                          name={key}
                          to={NavData1[key]}
                          onClick={logout}
                          size="lg"
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
                        size="lg"
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
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:id" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
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
