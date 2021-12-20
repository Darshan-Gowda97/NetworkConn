import React from 'react';
import PropTypes from 'prop-types';
import { BsInstagram, BsGlobe } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="bg-surface w-full h-auto pt-4">
      <div className="flex justify-center items-center">
        <div className="rounded-full lg:mt-4 h-32 w-32 lg:h-48 lg:w-48 bg-onSurface">
          <img
            src={avatar}
            alt="profile"
            className="w-full h-full rounded-full"
          ></img>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center pt-4 ">
        <h2 className="text-4xl text-onSurface">{name}</h2>
        <p className="text-xl pt-4 text-onBackground">
          {status} {company && <span> at {company}</span>}
        </p>
        <p className="my-1 text-lg text-onBackground">
          {location && <span>{location}</span>}
        </p>
        <div className="pt-4 pb-4 flex gap-2">
          {website && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <BsGlobe />
            </IconContext.Provider>
          )}
          {social && social.twitter && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <AiOutlineTwitter />
            </IconContext.Provider>
          )}
          {social && social.facebook && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <FaFacebookSquare />
            </IconContext.Provider>
          )}
          {social && social.youtube && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <AiFillYoutube />
            </IconContext.Provider>
          )}
          {social && social.linkedin && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <AiFillLinkedin />
            </IconContext.Provider>
          )}
          {social && social.instagram && (
            <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
              <BsInstagram />
            </IconContext.Provider>
          )}
        </div>
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
