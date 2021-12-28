import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ImSpinner9 } from 'react-icons/im';
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CustomButton from '../partials/CustomButton';
import CommentForm from './CommentForm';
import _ from 'lodash';
import CommentItem from './CommentItem';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    console.log(match.params.id);
    const id = match.params.id;
    console.log(match.params.id, id);
    getPost(id);
  }, [getPost]);
  return loading || post === null ? (
    <div className="bg-background w-full flex h-full min-h-screen">
      <div className="w-full h-full my-48 flex justify-center items-center bg-background">
        <ImSpinner9 size="40" className="text-primary animate-spin" />
      </div>
    </div>
  ) : (
    <div className="flex flex-col w-full min-h-screen lg:pt-16 pt-24 bg-background">
      <Link to="/posts" className="lg:pl-40 pl-4 mt-4">
        <CustomButton
          color="black"
          name="Back To Posts"
          bgcolor="onSurface"
          padding="2"
        />
      </Link>
      <div className="flex flex-col lg:w-3/4  h-full bg-surface lg:mx-auto mx-4 my-6 lg:px-32 px-10 lg:pt-7 pt-5 items-center">
        <div className="w-full mb-4">
          <PostItem post={post} showActions={false} />
        </div>

        <div className="w-full">
          <CommentForm postId={post._id} />
        </div>

        <div className="w-full ">
          {_.map(post.comments, (comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              postId={post._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
