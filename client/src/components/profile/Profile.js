import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImSpinner9 } from 'react-icons/im';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import CustomButton from '../partials/CustomButton';

const Profile = ({ getProfileById, profile, auth, match }) => {
  useEffect(() => {
    getProfileById(match.params.id);
    console.log('Hiiiii', match.params.id, auth, profile);
  }, [getProfileById]);

  return profile.loading && profile === null ? (
    <div className="w-full h-full my-48 flex justify-center items-center">
      <ImSpinner9 size="40" className="text-primary animate-spin" />
    </div>
  ) : (
    <div>
      <Link to="/profiles">
        <CustomButton
          color="black"
          name="Back To Profiles"
          bgcolor="onSurface"
          padding="2"
        />
      </Link>
      {auth.isAuthenticated === true &&
        auth.loading === false &&
        auth.user._id && (
          <Link to="/edit-profile">
            <CustomButton
              color="black"
              name="Edit Profiles"
              bgcolor="onSurface"
              padding="2"
            />
          </Link>
        )}
    </div>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
