import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
  hidden,
}) => (
  <div className="w-full">
    <h3 className="text-onSurface pt-5 text-lg font-semibold">{company}</h3>
    <p className="pt-2 text-onSurface opacity-75">
      <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p className="pt-2 text-onBackground">
      <span className="text-onSurface ">Position:</span> {title}
    </p>
    <p className="pt-2 text-onBackground">
      {' '}
      <span className="text-onSurface ">Description:</span> {description}
    </p>
    {hidden === 'false' && (
      <div className=" w-full pr-10 mx-auto flex justify-center items-center">
        <div className=" w-full pt-4 border-b-2 opacity-50 border-onBackground"></div>
      </div>
    )}
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
