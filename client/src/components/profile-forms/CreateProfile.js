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
import { Link, withRouter } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
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

  const submitClicked = (e) => {
    e.preventDefault();
    console.log(formData);
    createProfile(formData, history);
  };

  return (
    <div className="flex w-full h-auto bg-background ">
      <div className="flex flex-col lg:w-3/4 lg:mx-auto mx-4 my-8 items-center bg-surface lg:px-32 px-10 lg:pt-7 pt-5">
        <h1 className=" lg:text-5xl text-4xl font-semibold text-onSurface">
          Create Your Profile
        </h1>
        <div className="lg:flex hidden pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Lets get some information to make your profile stand out
          </h1>
        </div>
        <div className="flex lg:hidden items-center pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '20' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
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
                color="surface"
                onChange={(e) => statusClicked(e)}
                optionsData={statusData}
                selected={statusSelected}
              ></CustomSelect>
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
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
              <p className="opacity-40 pl-2 pt-1 text-sm text-onSurface">
                Tell us a little about yourself
              </p>
            </div>
            <div className="flex gap-2 items-center pt-5">
              <CustomButton
                color="surface"
                name="Add Social Network Links"
                bgcolor="onSurface"
                padding="2"
                type="button"
                onClick={() => setSocilaIconVisible(!isSocialIconVisible)}
              />
              <h1 className="opacity-75 text-lg text-onSurface">Optional</h1>
            </div>
            {isSocialIconVisible && (
              <div>
                <div className="flex gap-2 items-center pt-5">
                  <IconContext.Provider
                    value={{ color: '#D2D3D6', size: '30' }}
                  >
                    <AiOutlineTwitter size={32} />
                  </IconContext.Provider>
                  <CustomInput
                    type="text"
                    placeholder="Twitter URL"
                    value={twitter}
                    name="twitter"
                    onChange={(e) => onChange(e)}
                  ></CustomInput>
                </div>
                <div className="flex gap-2 items-center pt-5">
                  <IconContext.Provider
                    value={{ color: '#D2D3D6', size: '30' }}
                  >
                    <FaFacebookSquare size={30} />
                  </IconContext.Provider>
                  <CustomInput
                    type="text"
                    placeholder="Facebook URL"
                    value={facebook}
                    name="facebook"
                    onChange={(e) => onChange(e)}
                  ></CustomInput>
                </div>
                <div className="flex gap-2 items-center pt-5">
                  <IconContext.Provider
                    value={{ color: '#D2D3D6', size: '30' }}
                  >
                    <AiFillYoutube size={32} />
                  </IconContext.Provider>
                  <CustomInput
                    type="text"
                    placeholder="Youtube URL"
                    value={youtube}
                    name="youtube"
                    onChange={(e) => onChange(e)}
                  ></CustomInput>
                </div>
                <div className="flex gap-2 items-center pt-5">
                  <IconContext.Provider
                    value={{ color: '#D2D3D6', size: '30' }}
                  >
                    <AiFillLinkedin size={32} />
                  </IconContext.Provider>
                  <CustomInput
                    type="text"
                    placeholder="Linkedin URL"
                    value={linkedin}
                    name="linkedin"
                    onChange={(e) => onChange(e)}
                  ></CustomInput>
                </div>
                <div className="flex gap-2 items-center pt-5">
                  <IconContext.Provider
                    value={{ color: '#D2D3D6', size: '30' }}
                  >
                    <BsInstagram size={32} />
                  </IconContext.Provider>
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
              <Link to={'/dashboard'}>
                <CustomButton
                  color="black"
                  name="Go Back"
                  bgcolor="onSurface"
                  padding="2"
                />
              </Link>
            </div>
          </div>
        </form>
        <div className="pb-10"></div>
      </div>
    </div>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
