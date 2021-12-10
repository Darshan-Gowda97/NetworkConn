import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomInput from '../partials/CustomInput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = (props) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    gitusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    gitusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const submitClicked = (e) => {};
  return (
    <div className="flex  flex-col lg:px-32 px-10 lg:pt-7 pt-5">
      <h1 className=" lg:text-5xl text-4xl font-semibold text-primary">
        Create Your Profile
      </h1>
      <div className="lg:flex hidden pt-6">
        <BsFillPersonFill size={32} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Lets get some information to make your profile stand out
        </h1>
      </div>
      <div className="flex lg:hidden items-center pt-4">
        <BsFillPersonFill size={20} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Lets get some information to make your profile stand out
        </h1>
      </div>
      <form onSubmit={(e) => submitClicked(e)}>
        <div className="pt-5 ">
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Select Professional Status*"
              required="required"
              value={status}
            ></CustomInput>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Company*"
              required="required"
              value={company}
            ></CustomInput>
          </div>
        </div>
      </form>
    </div>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
