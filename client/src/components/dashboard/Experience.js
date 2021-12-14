import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import CustomButton from '../partials/CustomButton';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <div>
      <div className="flex pt-2 justify-center items-center">{exp.company}</div>
      <div className="flex justify-center items-center">{exp.title}</div>
      <div className="flex justify-center items-center">
        <Moment format="YYYY/MM/DD">{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{exp.to}</Moment>
        )}
      </div>
      <div className="flex">
        <CustomButton
          color="white"
          name="Delete"
          bgcolor="danger"
          padding="2"
        />
      </div>
    </div>
  ));
  return (
    <div className="pt-5">
      {experience.length > 0 && (
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold text-onBackground">
            Experience Credentials
          </h1>

          <div className=" w-3/4  my-5 grid grid-cols-4 gap-4">
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-8">
              Company
            </div>
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-8">
              Title
            </div>
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-14">
              Years
            </div>
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-14">
              Delete
            </div>
          </div>
        </div>
      )}
      {_.map(experience, (exp) => (
        <div key={exp._id} className="w-3/4 my-5 grid grid-cols-4 gap-4">
          <div className="flex pt-2 justify-center items-center">
            {exp.company}
          </div>
          <div className="flex justify-center items-center">{exp.title}</div>
          <div className="flex justify-center items-center">
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
