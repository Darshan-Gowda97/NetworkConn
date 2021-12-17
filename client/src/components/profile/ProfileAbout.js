import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { BiCheck } from 'react-icons/bi';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name },
  },
}) => {
  return (
    <div className="bg-surface w-full h-auto my-4 pt-2">
      {bio && (
        <div className="flex flex-col justify-center items-center pt-2 ">
          <h1 className="text-onSurface text-xl">
            {name.trim().split(' ')[0]}'s Bio
          </h1>
          <p className="text-onBackground text-lg">{bio}</p>
          <div className="pt-2 pb-2 w-3/4 border-b-2 border-onSurface"></div>
        </div>
      )}
      <div className="flex flex-col justify-center items-center pt-4 pb-2">
        <h1 className="text-onSurface text-xl">Skill Set</h1>
        <div className="flex gap-2">
          {_.map(skills, (skill, index) => (
            <div key={index} className="flex items-center text-onBackground">
              <BiCheck size={18} />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
