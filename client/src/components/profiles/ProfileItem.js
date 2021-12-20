import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import CustomButton from '../partials/CustomButton';
import { BiCheck } from 'react-icons/bi';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  const history = useHistory();
  const toProfile = (id) => {
    history.push(`/profile/${id}`);
  };
  return (
    <div className="w-full h-auto grid grid-cols-3 mt-5 py-4 border-2 border-onSurface rounded bg-surface">
      <div className="flex items-center justify-center px-4">
        <div className="rounded-full lg:mt-4 h-12 w-12 lg:h-36 lg:w-36 bg-onSurface">
          <img
            src={avatar}
            alt="profile"
            className="w-full h-full rounded-full"
          ></img>
        </div>
      </div>
      <div className="flex flex-col pt-4 ">
        <h2 className="text-xl text-onSurface">{name}</h2>
        <p className="text-base text-onBackground">
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1 text-base text-onBackground">
          {location && <span>{location}</span>}
        </p>

        <CustomButton
          color="white"
          bgcolor="primary"
          name="View Profile"
          padding="2"
          onClick={() => toProfile(_id)}
        />
      </div>
      <ul className="flex flex-col justify-center px-10  gap-1 text-onSurface">
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index}>
            <div className="flex items-center">
              <BiCheck size={18} />
              {skill}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
