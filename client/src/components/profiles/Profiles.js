import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImSpinner9 } from 'react-icons/im';
import { getProfiles } from '../../actions/profile';
import { IconContext } from 'react-icons/lib';
import { GiNestedHexagons } from 'react-icons/gi';
import ProfileItem from './ProfileItem';
import _ from 'lodash';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  return loading ? (
    <div className="w-full h-full my-48 flex justify-center items-center">
      <ImSpinner9 size="40" className="text-primary animate-spin" />
    </div>
  ) : (
    <div className="flex w-full h-auto min-h-screen bg-background">
      <div className="flex flex-col lg:w-3/4 w-full lg:px-32 px-10 pb-4 lg:pt-7 pt-5 bg-surface lg:mx-auto mx-4 my-8 items-center">
        <h1 className="lg:text-5xl text-4xl font-semibold text-onSurface">
          Developers
        </h1>
        <div className="lg:flex hidden gap-1 pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <GiNestedHexagons size={32} />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Browse and connect with developers
          </h1>
        </div>
        <div className="flex lg:hidden items-center gap-1 pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <GiNestedHexagons size={20} />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-base text-onSurface">
            Browse and connect with developers
          </h1>
        </div>
        <div className="w-full pt-5 gap-y-2">
          {profiles.length > 0 ? (
            _.map(profiles, (profile) => (
              <ProfileItem key={profile._id} profile={profile} />
            ))
          ) : (
            <h4>No Profiles Found....</h4>
          )}
        </div>
      </div>
    </div>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
