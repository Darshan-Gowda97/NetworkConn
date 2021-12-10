import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import { ImSpinner9 } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomButton from '../partials/CustomButton';
import { useHistory } from 'react-router-dom';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  const history = useHistory();
  useEffect(() => {
    getCurrentProfile();
  }, []);

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
    <div className="flex flex-col lg:px-32 px-10 lg:pt-7 pt-5">
      <h1 className="lg:text-5xl text-4xl font-semibold text-primary">
        Dashboard
      </h1>
      <div className="flex pt-6">
        <BsFillPersonFill size={30} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Welcome {user && user.name}
        </h1>
      </div>
      {profile !== null ? (
        <div>has </div>
      ) : (
        <div>
          <div className="pt-4 text-lg">
            <p>you have not yet setup profile, please add some info</p>
          </div>
          <div className="pt-4">
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
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
