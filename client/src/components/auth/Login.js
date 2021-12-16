import React from 'react';
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import CustomButton from '../partials/CustomButton';
import CustomInput from '../partials/CustomInput';
import { useHistory, Redirect } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
//Redux
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { login } from '../../actions/auth';

export const Login = ({ login, isAuthenticated }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (val) => {
    setEmail(val);
  };

  const onPasswordChange = (val) => {
    setPassword(val);
  };

  const emailBlur = (val) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(val)) {
    }
  };

  const submitClicked = async (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const toSignup = () => {
    history.push({
      pathname: '/register',
    });
  };

  //Redirect if Logged In
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="fixed w-full h-full py-14 bg-background ">
      <div className="flex h-auto flex-col lg:w-1/2 lg:mx-auto mx-8 my-4 bg-surface lg:px-10 px-6 lg:pt-7 pt-5">
        <h1 className=" lg:text-5xl text-4xl font-semibold text-onSurface">
          Sign In
        </h1>
        <div className="lg:flex items-center hidden pt-6">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Sign Into Your Account
          </h1>
        </div>
        <div className="flex lg:hidden items-center pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '20' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Sign Into Your Account
          </h1>
        </div>
        <form onSubmit={(e) => submitClicked(e)}>
          <div className="pt-5 ">
            <div className="">
              <CustomInput
                type="email"
                placeholder="EMAIL ADDRESS*"
                required="required"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                onBlur={(e) => emailBlur(e.target.value)}
              ></CustomInput>
              {/* {showEmailError ? <ErrorMsg Text="Enter valid Email Id" /> : null} */}
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
            {console.log(isAuthenticated)}
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
        <div className="pt-3 flex pb-4 ">
          <h1 className="font-thin text-onSurface">Dont have an account? </h1>
          <CustomButton
            color="primary"
            bgcolor="surface"
            name="Sign-up"
            padding="0"
            onClick={() => toSignup()}
          />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
