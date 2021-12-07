import React from 'react';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomButton from '../partials/CustomButton';
import CustomInput from '../partials/CustomInput';
import ErrorMsg from '../partials/ErrorMsg';
import { useHistory } from 'react-router-dom';

export const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const onEmailChange = (val) => {
    setShowEmailError(false);
    setEmail(val);
  };

  const onPasswordChange = (val) => {
    setPassword(val);
  };

  const emailBlur = (val) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(val)) {
      setShowEmailError(true);
    }
  };

  const submitClicked = async (e) => {
    e.preventDefault();
    console.log('Success');
  };

  const toSignup = () => {
    history.push({
      pathname: '/register',
    });
  };

  return (
    <div className="flex  flex-col lg:px-32 px-10 lg:pt-7 pt-5">
      <h1 className=" lg:text-5xl text-4xl font-semibold text-primary">
        Sign In
      </h1>
      <div className="lg:flex hidden pt-6">
        <BsFillPersonFill size={32} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Sign Into Your Account
        </h1>
      </div>
      <div className="flex lg:hidden items-center pt-4">
        <BsFillPersonFill size={20} />
        <h1 className=" lg:text-2xl text-lg text-black">
          Sign Into Your Account
        </h1>
      </div>
      <form onSubmit={(e) => submitClicked(e)}>
        <div className="pt-5 ">
          <div className="pt-5">
            <CustomInput
              type="email"
              placeholder="EMAIL ADDRESS*"
              required="required"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={(e) => emailBlur(e.target.value)}
            ></CustomInput>
            {showEmailError ? <ErrorMsg Text="Enter valid Email Id" /> : null}
          </div>
          <div className="pt-5">
            <CustomInput
              type="password"
              placeholder="PASSWORD*"
              required="required"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
            ></CustomInput>
          </div>

          <div className="pt-5">
            <CustomButton
              color="white"
              name="Login"
              bgcolor="primary"
              padding="2"
              type="submit"
            />
          </div>
        </div>
      </form>
      <div className="pt-3 flex ">
        <h1 className="font-thin">Dont have an account? </h1>
        <CustomButton
          color="primary"
          bgcolor="white"
          name="Sign-up"
          padding="0"
          onClick={() => toSignup()}
        />
      </div>
    </div>
  );
};

export default Login;
