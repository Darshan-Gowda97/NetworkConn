import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import _ from 'lodash';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import CustomButton from '../partials/CustomButton';

const Education = ({ education, deleteEducation }) => {
  return (
    <div className="pt-5">
      {education.length > 0 && (
        <div>
          <h1 className="lg:text-2xl text-xl font-semibold text-onBackground">
            Education Credentials
          </h1>
          <div className=" w-3/4  my-5 grid grid-cols-4 gap-4">
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-8">
              School
            </div>
            <div className="bg-surface flex justify-center items-center h-10 text-onSurface px-8">
              Degree
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
      {_.map(education, (edu) => (
        <div key={edu._id} className="w-3/4  my-5 grid grid-cols-4 gap-4">
          <div className="flex pt-2 justify-center items-center">
            {edu.school}
          </div>
          <div className="flex justify-center items-center">{edu.degree}</div>
          <div className="flex justify-center items-center">
            <Moment format="YYYY/MM/DD">{edu.from}</Moment> -{' '}
            {edu.to === null ? (
              ' Now'
            ) : (
              <Moment format="YYYY/MM/DD">{edu.to}</Moment>
            )}
          </div>
          <div className="flex justify-center items-center">
            <CustomButton
              color="white"
              name="Delete"
              bgcolor="danger"
              padding="2"
              onClick={() => deleteEducation(edu._id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
