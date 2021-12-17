import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import { ImSpinner9 } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import { TiUserDelete } from 'react-icons/ti';
import CustomButton from '../partials/CustomButton';
import { useHistory } from 'react-router-dom';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';
import { IconContext } from 'react-icons/lib';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  const history = useHistory();
  let icon = <TiUserDelete />;
  useEffect(() => {
    console.log('Hiii');
    getCurrentProfile();
  }, [getCurrentProfile]);

  const toCreateProfile = () => {
    history.push({
      pathname: '/create-profile',
    });
  };
  return loading && profile == null ? (
    <div className="w-full h-full my-48 flex justify-center items-center">
      <ImSpinner9 size="40" className="text-primary animate-spin" />
    </div>
  ) : (
    <div className="flex w-full h-auto min-h-screen bg-background ">
      <div className="flex flex-col lg:w-3/4 w-full lg:px-32 px-10 lg:pt-7 pt-5 bg-surface lg:mx-auto mx-4 my-8 items-center">
        <h1 className="lg:text-5xl text-4xl font-semibold text-onSurface">
          Dashboard
        </h1>
        <div className="flex pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Welcome {user && user.name}
          </h1>
        </div>
        {profile !== null ? (
          <div>
            <DashboardAction />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div className="my-2 flex justify-center items-center">
              <CustomButton
                color="white"
                name="Delete My Account"
                bgcolor="danger"
                padding="2"
                onClick={() => deleteAccount()}
                icon={icon}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="pt-4 lg:text-lg text-normal text-onSurface">
              <p>you have not yet setup profile, please add some info</p>
            </div>
            <div className="pt-4 ">
              <CustomButton
                color="white"
                bgcolor="primary"
                name="Create-Profile"
                padding="2"
                onClick={() => toCreateProfile()}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
