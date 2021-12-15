import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomInput from '../partials/CustomInput';
import CustomButton from '../partials/CustomButton';
import { IconContext } from 'react-icons/lib';
import { FaBlackTie } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import MonthBtn from '../partials/MonthBtn';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitClicked = (e) => {
    e.preventDefault();
    console.log(formData);
    addExperience(formData, history);
  };

  return (
    <div className="flex w-full h-auto bg-background ">
      <div className="flex  flex-col lg:w-3/4 lg:mx-auto mx-4 my-8 items-center bg-surface lg:px-32 px-10 lg:pt-7 pt-5">
        <h1 className=" lg:text-5xl text-4xl font-semibold text-onSurface">
          Add An Experience
        </h1>
        <div className="lg:flex hidden gap-1 pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <FaBlackTie />
          </IconContext.Provider>
          <h1 className=" lg:text-xl text-normal text-onSurface">
            Add any developer/programming positions that you have had in the
            past
          </h1>
        </div>
        <div className="flex lg:hidden items-center gap-1 pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '20' }}>
            <FaBlackTie size={20} />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-base text-onSurface">
            Add any developer/programming experience
          </h1>
        </div>
        <form className="w-3/4" onSubmit={(e) => submitClicked(e)}>
          <div className="pt-5">
            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="* Job Title"
                name="title"
                value={title}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>
            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="* Company"
                name="company"
                value={company}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>

            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="Location"
                name="location"
                value={location}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>
            <div className="pt-5">
              <h1 className="pb-1 pl-1 text-onSurface">From Date</h1>
              <MonthBtn
                value={from}
                name="from"
                id="from"
                placeholder="dd-mm-yyyy"
                required="required"
                onChange={(e) => onChange(e)}
                onFocus={(e) => (e.target.type = 'date')}
                onBlur={(e) => (e.target.type = 'text')}
                type="text"
              ></MonthBtn>
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input
                type="checkbox"
                placeholder="Current Job"
                className="ml-2 placeholder-onBackground"
                checked={current}
                name="current"
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              ></input>
              <h1 className="text-onSurface">Current Job</h1>
            </div>
            {!toDateDisabled && (
              <div className="pt-5">
                <h1 className="pb-1 pl-1 text-onSurface">To Date</h1>
                <MonthBtn
                  value={to}
                  name="to"
                  id="to"
                  placeholder="dd-mm-yyyy"
                  required="required"
                  onChange={(e) => onChange(e)}
                  onFocus={(e) => (e.target.type = 'date')}
                  onBlur={(e) => (e.target.type = 'text')}
                  type="text"
                ></MonthBtn>
              </div>
            )}
            <div className="pt-5">
              <textarea
                type="text"
                placeholder="  Job description"
                className="placeholder-onBackground text-onSurface bg-surface rounded text-sm border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent w-full"
                cols="30"
                rows="5"
                name="description"
                value={description}
                onChange={(e) => onChange(e)}
              ></textarea>
            </div>
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
