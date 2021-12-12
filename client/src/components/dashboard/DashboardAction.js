import React from 'react';
import CustomButton from '../partials/CustomButton';
import { BsPersonCircle } from 'react-icons/bs';
import { GiGraduateCap } from 'react-icons/gi';
import { FaBlackTie } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardAction = () => {
  let icon = <BsPersonCircle size={18} />;
  let icon1 = <GiGraduateCap size={18} />;
  let icon2 = <FaBlackTie size={18} />;

  return (
    <div className="mt-5">
      <div className="flex gap-4">
        <Link to={'/edit-profile'}>
          <CustomButton
            color="black"
            name="Edit Profile"
            bgcolor="onSurface"
            padding="2"
            type="button"
            icon={icon}
          />
        </Link>
        <Link to={'/add-experience'}>
          <CustomButton
            color="black"
            name="Add Experience"
            bgcolor="onSurface"
            padding="2"
            type="button"
            icon={icon2}
          />
        </Link>
        <Link to={'/add-education'}>
          <CustomButton
            color="black"
            name="Add Education"
            bgcolor="onSurface"
            padding="2"
            type="button"
            icon={icon1}
          />
        </Link>
      </div>
    </div>
  );
};

export default DashboardAction;
