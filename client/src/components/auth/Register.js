import React from 'react';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomInput from '../partials/CustomInput';

export const Register = () => {
  const [fname, setFname] = useState('');

  const onFnameChange = (val) => {
    const regex = /^[a-zA-Z ]{0,60}$/;
    if (regex.test(val)) {
      setFname(val);
    }
  };

  return (
    <div className="flex flex-col lg:px-32 px-10 lg:pt-7 pt-5">
      <h1 className=" lg:text-5xl text-4xl font-semibold text-primary">
        Sign Up
      </h1>
      <div className="lg:flex hidden pt-6">
        <BsFillPersonFill size={32} />
        <h1 className=" lg:text-2xl text-lg text-black">Create Your Account</h1>
      </div>
      <div className="flex lg:hidden items-center pt-4">
        <BsFillPersonFill size={20} />
        <h1 className=" lg:text-2xl text-lg text-black">Create Your Account</h1>
      </div>
      <CustomInput
        type="text"
        placeholder="First Name*"
        required="required"
        value={fname}
        onChange={(e) => onFnameChange(e.target.value)}
      ></CustomInput>
    </div>
  );
};

export default Register;
