import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomInput from '../partials/CustomInput';
import CustomButton from '../partials/CustomButton';
import { GiGraduateCap } from 'react-icons/gi';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile';
import { IconContext } from 'react-icons/lib';
import MonthBtn from '../partials/MonthBtn';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });
  const [toDateDisabled, toggleDisabled] = useState(false);
  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitClicked = (e) => {
    e.preventDefault();
    console.log(formData);
    addEducation(formData, history);
  };

  return (
    <div className="flex w-full h-auto bg-background lg:pt-16 pt-28">
      <div className="flex flex-col lg:w-3/4 lg:mx-auto mx-10 my-8 items-center bg-surface  lg:px-32 px-10 lg:pt-7 pt-5">
        <h1 className=" lg:text-5xl text-4xl font-semibold text-onSurface">
          Add Your Education
        </h1>
        <div className="lg:flex hidden gap-1 pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <GiGraduateCap size={32} />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Add any school or bootcamp that you have attended
          </h1>
        </div>
        <div className="flex lg:hidden items-center gap-1 pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <GiGraduateCap size={20} />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-base text-onSurface">
            Add any school you attented
          </h1>
        </div>
        <form className="w-3/4" onSubmit={(e) => submitClicked(e)}>
          <div className="pt-5">
            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="* School or Bootcamp"
                name="school"
                value={school}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>
            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="* Degree"
                name="degree"
                value={degree}
                onChange={(e) => onChange(e)}
              ></CustomInput>
            </div>

            <div className="pt-5">
              <CustomInput
                type="text"
                placeholder="Field of Study"
                name="fieldofstudy"
                value={fieldofstudy}
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
                className="ml-2 lg:w-4 lg:h-4 bg-onSurface"
                checked={current}
                name="current"
                value={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              ></input>
              <h1 className="text-onSurface">Current Education</h1>
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
                placeholder="  Program description"
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

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(withRouter(AddEducation));
