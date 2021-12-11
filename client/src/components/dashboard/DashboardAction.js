import React from 'react';
import CustomButton from '../partials/CustomButton';
import { BsPersonCircle } from 'react-icons/bs';

const DashboardAction = () => {
  let icon = <BsPersonCircle size={18} />;
  return (
    <div className="mt-5">
      <div className="flex gap-4">
        <CustomButton
          color="black"
          name="Edit Profile"
          bgcolor="onSurface"
          padding="2"
          type="button"
          icon={icon}
        />
        <CustomButton
          color="black"
          name="Add Experience"
          bgcolor="onSurface"
          padding="2"
          type="button"
          icon={icon}
        />
        <CustomButton
          color="black"
          name="Add Education"
          bgcolor="onSurface"
          padding="2"
          type="button"
          icon={icon}
        />
      </div>
    </div>
  );
};

export default DashboardAction;
