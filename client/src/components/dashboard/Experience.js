import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import CustomButton from '../partials/CustomButton';

const Experience = ({ experience, deleteExperience }) => {
  return (
    <div className="pt-5">
      {experience.length > 0 && (
        <div>
          <h1 className="lg:text-2xl text-xl  font-semibold text-onSurface">
            Experience Credentials
          </h1>

          <div className=" my-5 grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="bg-onSurface flex justify-center items-center h-10 text-black px-8">
              Company
            </div>
            <div className="bg-onSurface lg:flex hidden justify-center items-center h-10 text-black px-8">
              Title
            </div>
            <div className="bg-onSurface lg:flex hidden justify-center items-center h-10 text-black px-14">
              Years
            </div>
            <div className="bg-onSurface flex justify-center items-center h-10 text-black px-14">
              Delete
            </div>
          </div>
        </div>
      )}
      {_.map(experience, (exp) => (
        <div
          key={exp._id}
          className=" my-5 grid lg:grid-cols-4 grid-cols-2  gap-4"
        >
          <div className="flex pt-2 justify-center items-center text-onSurface">
            {exp.company}
          </div>
          <div className="lg:flex hidden justify-center items-center text-onSurface">
            {exp.title}
          </div>
          <div className="lg:flex hidden justify-center items-center text-onSurface">
            <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
            {exp.to === null ? (
              ' Now'
            ) : (
              <Moment format="YYYY/MM/DD">{exp.to}</Moment>
            )}
          </div>
          <div className="flex justify-center items-center">
            <CustomButton
              color="white"
              name="Delete"
              bgcolor="danger"
              padding="2"
              onClick={() => deleteExperience(exp._id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
