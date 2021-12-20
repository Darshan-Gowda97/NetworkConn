import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImSpinner9 } from 'react-icons/im';
import { getProfileById } from '../../actions/profile';
import { Link } from 'react-router-dom';
import CustomButton from '../partials/CustomButton';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import _ from 'lodash';
import ProfileGithub from './ProfileGithub';

const Profile = ({ getProfileById, profile: { profile }, auth, match }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProfileById(match.params.id);
    setLoading(false);
  }, [match.params.id]);

  return loading || profile === null ? (
    <div className="w-full h-full my-48 flex justify-center items-center">
      <ImSpinner9 size="40" className="text-primary animate-spin" />
    </div>
  ) : (
    <div className="w-full h-auto bg-background">
      <div className="flex gap-4 pt-4 lg:pl-52 pl-8">
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
          auth.user._id === profile.user._id && (
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
      <div className="flex flex-col lg:w-3/4 lg:mx-auto mx-4 mt-4 items-center lg:px-12 px-2 lg:pt-2 pt-2">
        {profile && (
          <div className="w-full">
            {' '}
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 pb-4">
              <div className="w-full h-auto bg-surface pl-12 pt-4 pb-4">
                <h2 className="text-onSurface lg:text-3xl text-xl font-bold">
                  Experience
                </h2>
                {profile.experience.length > 0 ? (
                  _.map(profile.experience, (experience, index) =>
                    index + 1 === profile.experience.length ? (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                        hidden="true"
                      />
                    ) : (
                      <ProfileExperience
                        key={experience._id}
                        experience={experience}
                        hidden="false"
                      />
                    )
                  )
                ) : (
                  <h4 className="pt-4 text-onSurface">
                    No Experience Credentials
                  </h4>
                )}
              </div>
              <div className="w-full h-auto bg-surface pl-12 pt-4 pb-4">
                <h2 className="text-onSurface lg:text-3xl text-xl font-bold">
                  Education
                </h2>
                {profile.education.length > 0 ? (
                  _.map(profile.education, (education, index) =>
                    index + 1 === profile.education.length ? (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                        hidden="true"
                      />
                    ) : (
                      <ProfileEducation
                        key={education._id}
                        education={education}
                        hidden="false"
                      />
                    )
                  )
                ) : (
                  <h4 className="pt-4 text-onSurface">
                    No Education Credentials
                  </h4>
                )}
              </div>
            </div>
            {profile.githubusername && (
              <ProfileGithub username={profile.githubusername} />
            )}
          </div>
        )}
      </div>
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
