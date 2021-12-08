import React from 'react';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomButton from '../partials/CustomButton';
import CustomInput from '../partials/CustomInput';
import ErrorMsg from '../partials/ErrorMsg';
import { useHistory, Redirect } from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alerts';
import { register } from '../../actions/auth';
import propTypes from 'prop-types';

export const Register = ({ setAlert, register, isAuthenticated }) => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailError, setShowEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onnameChange = (val) => {
    const regex = /^[a-zA-Z ]{0,60}$/;
    if (regex.test(val)) {
      setName(val);
    }
  };

  const onEmailChange = (val) => {
    setShowEmailError(false);
    setEmail(val);
  };

  const onPasswordChange = (val) => {
    setPassword(val);
  };
  const onConfirmPassChange = (val) => {
    setConfirmPassword(val);
  };

  const emailBlur = (val) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(val)) {
      setShowEmailError(true);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitClicked = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setAlert('Passwords are not matching', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  const toLogin = () => {
    history.push({
      pathname: '/login',
    });
  };

  //Redirect if Registered
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="flex  flex-col lg:px-32 px-10 lg:pt-7 pt-5">
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
      <form onSubmit={(e) => submitClicked(e)}>
        <div className="pt-5 ">
          <CustomInput
            type="text"
            placeholder="Name*"
            //required="required"
            value={name}
            onChange={(e) => onnameChange(e.target.value)}
          ></CustomInput>
          <div className="pt-5">
            <CustomInput
              type="email"
              placeholder="EMAIL ADDRESS*"
              //required="required"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              onBlur={(e) => emailBlur(e.target.value)}
            ></CustomInput>
            {showEmailError ? <ErrorMsg Text="Enter valid Email Id" /> : null}
            <h1 className="text-base font-thin opacity-75">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </h1>
          </div>
          <div className="pt-5">
            <CustomInput
              type="password"
              placeholder="PASSWORD*"
              //required="required"
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              // min='6'
            ></CustomInput>
          </div>
          <div className="pt-5">
            <CustomInput
              type="password"
              placeholder="CONFIRM PASSWORD*"
              // required="required"
              value={confirmPassword}
              onChange={(e) => onConfirmPassChange(e.target.value)}
              min="6"
            ></CustomInput>
          </div>
          <div className="pt-5">
            <CustomButton
              color="white"
              name="Register"
              bgcolor="primary"
              padding="2"
              type="submit"
            />
          </div>
        </div>
      </form>
      <div className="pt-3 flex ">
        <h1 className="font-thin">Already have an account? </h1>
        <CustomButton
          color="primary"
          bgcolor="white"
          name="Sign-in"
          padding="0"
          onClick={() => toLogin()}
        />
      </div>
    </div>
  );
};

Register.propTypes = {
  setAlert: propTypes.func.isRequired,
  register: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
