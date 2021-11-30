import React from 'react';
import showcase from '../../assets/Images/showcase.jpg';
import icon from '../../assets/Images/icon.png';
import { FcWorkflow } from 'react-icons/fc';
import { FaCaretDown } from 'react-icons/fa';

const Homepage = () => {
  return (
    <div className="fixed bg-overlay flex justify-center items-center w-full h-full">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className=" text-6xl font-semibold text-white -mt-32 ">
          Developer Connector
        </h1>
        <h1 className=" text-2xl text-white ">
          Create a developer profile/portfolio, share posts and get help from
          other developers
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
