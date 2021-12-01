import React from 'react';
import showcase from '../../assets/Images/showcase.jpg';
import { useHistory } from 'react-router-dom';

const Homepage = () => {
  const history = useHistory();
  const toSignup = () => {
    history.push({
      pathname: '/register',
    });
  };
  const toLogin = () => {
    history.push({
      pathname: '/login',
    });
  };
  return (
    <div className="flex ">
      <div className="fixed lg:w-auto lg:h-auto w-full h-full flex">
        <img src={showcase} />
      </div>
      <div className="fixed flex w-full h-full bg-overlay justify-center items-center">
        <div className="lg:flex hidden flex-col gap-4 justify-center items-center">
          <h1 className=" lg:text-6xl text-4xl font-semibold text-white -mt-32 ">
            Developer Connector
          </h1>
          <h1 className="pt-2 lg:text-2xl text-xl text-white ">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </h1>

          <div className="flex justify-center items-center gap-5 pt-1 text-lg ">
            <div className="flex w-24 h-10 bg-primary justify-center items-center rounded hover:opacity-75">
              <div className="text-white">
                <button className="w-full h-full" onClick={toSignup}>
                  Signup
                </button>
              </div>
            </div>
            <div className="flex w-24 h-10 bg-white justify-center items-center rounded hover:opacity-75">
              <div className="">
                <button
                  className="w-full h-full font-semibold "
                  onClick={toLogin}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:hidden flex-col lg:gap-4 gap-1 justify-center items-center">
          <h1 className=" lg:text-6xl text-5xl font-semibold text-white lg:-mt-32 -mt-48 ">
            Developer
          </h1>
          <h1 className=" lg:text-6xl text-5xl font-semibold text-white lg:-mt-32 ">
            Connector
          </h1>
          <h1 className="pt-2 lg:text-2xl text-xl text-white ">
            Create a developer profile/portfolio, share posts and
          </h1>
          <h1 className="lg:pt-2 lg:text-2xl text-xl text-white ">
            get help from other developers
          </h1>

          <div className="flex justify-center items-center gap-5 pt-3 text-lg ">
            <div className="flex w-24 h-10 bg-primary justify-center items-center rounded hover:opacity-75">
              <div className="text-white">
                <button className="w-full h-full">Signup</button>
              </div>
            </div>
            <div className="flex w-24 h-10 bg-white justify-center items-center rounded hover:opacity-75">
              <div className="">
                <button className="w-full h-full font-semibold ">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
