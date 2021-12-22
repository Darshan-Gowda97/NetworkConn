import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import CustomButton from '../partials/CustomButton';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { VscError } from 'react-icons/vsc';

const PostItem = ({
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
}) => {
  let icon = <AiFillLike size={18} />;
  let icon2 = <AiFillDislike size={18} />;
  let icon3 = <VscError size={18} />;
  let placeholder = `Discussion ${comments.length}`;
  return (
    <div className="flex w-full h-auto my-4  border-2 border-onBackground">
      <div className="w-full h-auto grid grid-cols-4">
        <div className="col-span-1">
          <a
            href=""
            className="flex flex-col items-center justify-center lg:pl-12 pl-6"
          >
            <div className="rounded-full mt-4 h-14 w-14 lg:h-28 lg:w-28 bg-onSurface">
              <img
                src={avatar}
                alt="profile"
                className="w-full h-full rounded-full"
              ></img>
            </div>
            <div>
              <h4 className="text-onSurface font-semibold pb-2">{name}</h4>
            </div>
          </a>
        </div>
        <div className="col-span-3 flex flex-col  pt-6 pl-12 ">
          <p className="text-onSurface text-xl">{text}</p>
          <p className="text-sm text-onSurface opacity-50 pt-4">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          <div className="flex pt-3 gap-2 ">
            {likes.length > 0 ? (
              <CustomButton
                color="black"
                name={likes.length}
                bgcolor="onSurface"
                padding="1"
                paddingx="2"
                type="button"
                icon={icon}
              />
            ) : (
              <CustomButton
                color="black"
                bgcolor="onSurface"
                padding="1"
                paddingx="2"
                type="button"
                icon={icon}
              />
            )}
            <CustomButton
              color="black"
              bgcolor="onSurface"
              padding="1"
              paddingx="2"
              type="button"
              icon={icon2}
            />
            <Link to={`/post/${_id}`}>
              {comments.length > 0 ? (
                <CustomButton
                  color="black"
                  name={placeholder}
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="3"
                  type="button"
                />
              ) : (
                <CustomButton
                  color="black"
                  name="Discussion"
                  bgcolor="onSurface"
                  padding="1"
                  paddingx="3"
                  type="button"
                />
              )}
            </Link>

            {!auth.loading && user === auth.user._id && (
              <CustomButton
                color="white"
                bgcolor="danger"
                padding="1"
                paddingx="3"
                type="button"
                icon={icon3}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(PostItem);
