import React from 'react';

const NotFound = (props) => {
  return (
    <div className="bg-background w-full flex h-full min-h-screen">
      <div className="w-full h-full my-48 flex flex-col gap-2 justify-center items-center bg-background">
        <h1 className="text-onBackground text-3xl">Page Not Found</h1>
        <p className="text-onBackground text-xl">Sorry this page not exists</p>
      </div>
    </div>
  );
};

export default NotFound;
