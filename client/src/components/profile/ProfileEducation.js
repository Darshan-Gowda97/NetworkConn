import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
  hidden,
}) => (
  <div className="w-full">
    <h3 className="text-onSurface pt-5 text-lg font-semibold">{school}</h3>
    <p className="pt-2 text-onSurface opacity-75">
      <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p className="pt-2 text-onBackground">
      <span className="text-onSurface ">Degree:</span> {degree}
    </p>
    <p className="pt-2 text-onBackground">
      <span className="text-onSurface ">Field of Study:</span> {fieldofstudy}
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

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
