import React, { useState } from 'react';
import { BsFillPersonFill, BsInstagram } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';

import CustomInput from '../partials/CustomInput';
import CustomSelect from '../partials/CustomSelect';
import CustomButton from '../partials/CustomButton';
import { withRouter } from 'react-router-dom';
//Redux
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
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
  const [comstatus, setStatus] = useState('');
  const [statusSelected, setStatusSelected] = useState(false);
  const [isSocialIconVisible, setSocilaIconVisible] = useState(false);

  let statusData = [
    'Developer',
    'Junior Developer',
    'Senior Developer',
    'Manager',
    'Student or Learning',
    'Instructor or Teacher',
    'Intern',
    'Other',
  ];

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

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const statusClicked = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value !== 'Select Professional Status*') {
      setStatusSelected(true);
    }
  };

  const goBack = () => {};

  const submitClicked = (e) => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, history);
  };

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
            <CustomSelect
              type="text"
              placeholder="Select Professional Status*"
              value={status}
              name="status"
              color="white"
              onChange={(e) => statusClicked(e)}
              optionsData={statusData}
              selected={statusSelected}
            ></CustomSelect>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              Give us an idea of where you are at in your career
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              Could be your own company or one you work for
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              Could be your own or a company website
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              City and state suggested (eg. Madur, Mandya)
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="Github Username"
              name="gitusername"
              value={gitusername}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              If you want your latest repos and a Github link, include your
              username
            </p>
          </div>
          <div className="pt-5">
            <CustomInput
              type="text"
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            ></CustomInput>
            <p className="opacity-40 pl-2 pt-1 text-sm">
              Tell us a little about yourself
            </p>
          </div>
          <div className="flex gap-2 items-center pt-5">
            <CustomButton
              color="black"
              name="Add Social Network Links"
              bgcolor="onSurface"
              padding="2"
              type="button"
              onClick={() => setSocilaIconVisible(!isSocialIconVisible)}
            />
            <h1 className="opacity-75 text-lg">Optional</h1>
          </div>
          {isSocialIconVisible && (
            <div>
              <div className="flex gap-2 items-center pt-5">
                <AiOutlineTwitter size={32} />
                <CustomInput
                  type="text"
                  placeholder="Twitter URL"
                  value={twitter}
                  name="twitter"
                  onChange={(e) => onChange(e)}
                ></CustomInput>
              </div>
              <div className="flex gap-2 items-center pt-5">
                <FaFacebookSquare size={30} />
                <CustomInput
                  type="text"
                  placeholder="Facebook URL"
                  value={facebook}
                  name="facebook"
                  onChange={(e) => onChange(e)}
                ></CustomInput>
              </div>
              <div className="flex gap-2 items-center pt-5">
                <AiFillYoutube size={32} />
                <CustomInput
                  type="text"
                  placeholder="Youtube URL"
                  value={youtube}
                  name="youtube"
                  onChange={(e) => onChange(e)}
                ></CustomInput>
              </div>
              <div className="flex gap-2 items-center pt-5">
                <AiFillLinkedin size={32} />
                <CustomInput
                  type="text"
                  placeholder="Linkedin URL"
                  value={linkedin}
                  name="linkedin"
                  onChange={(e) => onChange(e)}
                ></CustomInput>
              </div>
              <div className="flex gap-2 items-center pt-5">
                <BsInstagram size={32} />
                <CustomInput
                  type="text"
                  placeholder="Instagram URL"
                  value={instagram}
                  name="instagram"
                  onChange={(e) => onChange(e)}
                ></CustomInput>
              </div>
            </div>
          )}
          <div className="flex gap-2 items-center pt-5">
            <CustomButton
              color="white"
              name="Submit"
              bgcolor="primary"
              padding="2"
              type="submit"
            />
            <CustomButton
              color="black"
              name="Go Back"
              bgcolor="onSurface"
              padding="2"
              onClick={() => goBack()}
            />
          </div>
        </div>
      </form>
      <div className="mb-10"></div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
