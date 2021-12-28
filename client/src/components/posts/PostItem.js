import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import CustomButton from '../partials/CustomButton';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';
import { addLike, removeLike, deletePost } from '../../actions/post';
import post from '../../state/reducers/post';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions,
}) => {
  let icon = <AiFillLike size={18} />;
  let icon2 = <AiFillDislike size={18} />;
  let icon3 = <VscError size={18} />;
  let placeholder = `comment ${comments.length}`;
  const [like, setLike] = useState(true);
  const history = useHistory();
  const toPost = (id) => {
    history.push(`/post/${id}`);
  };
  return (
    <div className="flex w-full h-auto my-2 mb-4 border border-onBackground">
      <div className="w-full h-auto grid grid-cols-4">
        <div className="col-span-1">
          <Link
            to={`/profile/${user}`}
            className="flex flex-col items-center justify-center lg:pl-12 pl-6"
          >
            <div className="rounded-full lg:mt-4 mt-4 h-16 w-16 lg:h-24 lg:w-24 bg-onSurface">
              <img
                src={avatar}
                alt="profile"
                className="w-full h-full rounded-full"
              ></img>
            </div>
            <div>
              <h4 className="text-onSurface font-semibold pb-2">{name}</h4>
            </div>
          </Link>
        </div>
        <div className="col-span-3 flex flex-col mb-2 lg:mb-4 pt-6 lg:pl-12 pl-8">
          <p className="text-onSurface text-base lg:text-xl">{text}</p>
          <p className="text-sm text-onSurface opacity-50 pt-4">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          {showActions && (
            <div className="flex pt-3 gap-2 pb-4 lg:pb-2">
              {likes.length > 0 ? (
                <CustomButton
                  color="black"
                  name={likes.length}
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="2"
                  type="button"
                  icon={icon}
                  onClick={() => addLike(_id)}
                />
              ) : (
                <CustomButton
                  color="black"
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="2"
                  type="button"
                  icon={icon}
                  onClick={() => addLike(_id)}
                />
              )}
              <CustomButton
                color="black"
                bgcolor="onSurface"
                padding="1"
                paddingx="2"
                type="button"
                icon={icon2}
                onClick={() => removeLike(_id)}
              />

              {comments.length > 0 ? (
                <CustomButton
                  color="black"
                  name={placeholder}
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="3"
                  type="button"
                  onClick={() => toPost(_id)}
                />
              ) : (
                <CustomButton
                  color="black"
                  name="comment"
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="3"
                  type="button"
                  onClick={() => toPost(_id)}
                />
              )}

              {!auth.loading && user === auth.user._id && (
                <CustomButton
                  color="white"
                  bgcolor="danger"
                  padding="1"
                  paddingx="3"
                  type="button"
                  icon={icon3}
                  onClick={(e) => deletePost(_id)}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
