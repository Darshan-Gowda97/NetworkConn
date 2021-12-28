import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImSpinner9 } from 'react-icons/im';
import { BsFillPersonFill } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import _ from 'lodash';
import PostItem from './PostItem';
import ProfileForm from './ProfileForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return loading ? (
    <div className="bg-background w-full flex h-full min-h-screen">
      <div className="w-full h-full my-48 flex justify-center items-center bg-background">
        <ImSpinner9 size="40" className="text-primary animate-spin" />
      </div>
    </div>
  ) : (
    <div className="flex w-full min-h-screen bg-background lg:pt-16 pt-24">
      <div className="flex flex-col lg:w-3/4 w-full h-full bg-surface lg:mx-auto mx-4 my-6 lg:px-32 px-10 lg:pt-7 pt-5 items-center">
        <h1 className="lg:text-5xl text-4xl font-semibold text-onSurface">
          Posts
        </h1>
        <div className="flex pt-4">
          <IconContext.Provider value={{ color: '#D2D3D6', size: '30' }}>
            <BsFillPersonFill />
          </IconContext.Provider>
          <h1 className=" lg:text-2xl text-lg text-onSurface">
            Welcome to the Community
          </h1>
        </div>
        <ProfileForm />
        <div className="w-full my-2">
          {_.map(posts, (post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
