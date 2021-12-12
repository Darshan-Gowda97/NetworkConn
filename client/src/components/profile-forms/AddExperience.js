import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomInput from '../partials/CustomInput';
import CustomButton from '../partials/CustomButton';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaBlackTie } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

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
    <div className="flex  flex-col lg:px-32 px-10 lg:pt-7 pt-5">
      <h1 className=" lg:text-5xl text-4xl font-semibold text-primary">
        Add An Experience
      </h1>
      <div className="lg:flex hidden pt-6">
        <FaBlackTie size={32} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Add any developer/programming positions that you have had in the past
        </h1>
      </div>
      <div className="flex lg:hidden gap-1 items-center pt-4">
        <FaBlackTie size={20} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Add any developer/programming positions that you have had in the past
        </h1>
      </div>
      <form onSubmit={(e) => submitClicked(e)}>
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
            <h1 className="pb-1 pl-1">From Date</h1>
            <CustomInput
              type="date"
              placeholder="dd-mm-yyyy"
              name="from"
              value={from}
              onChange={(e) => onChange(e)}
            ></CustomInput>
          </div>
          <div className="flex items-center gap-2 pt-5">
            <input
              type="checkbox"
              placeholder="Current Job"
              className="ml-2"
              checked={current}
              name="current"
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            ></input>
            <h1>Current Job</h1>
          </div>
          {!toDateDisabled && (
            <div className="pt-5">
              <h1 className="pb-1 pl-1">To Date</h1>
              <CustomInput
                type="date"
                placeholder="dd-mm-yyyy"
                name="to"
                value={to}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>
          )}
          <div className="pt-5">
            <textarea
              type="text"
              placeholder="  Job description"
              className="placeholder-surface text-black bg-white rounded text-sm border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent w-full"
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
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
