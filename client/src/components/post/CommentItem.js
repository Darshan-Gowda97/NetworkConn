import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/post';
import Moment from 'react-moment';
import { VscError } from 'react-icons/vsc';
import CustomButton from '../partials/CustomButton';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  deleteComment,
  auth,
}) => {
  let icon3 = <VscError size={18} />;
  return (
    <div className="flex w-full h-auto my-2 mb-4 border border-onBackground">
      <div className="w-full h-auto grid grid-cols-4">
        <div className="col-span-1">
          <Link
            to={`/profile/${user}`}
            className="flex flex-col items-center justify-center lg:pl-12 pl-6"
          >
            <div className="rounded-full mt-4 h-16 w-16 lg:h-24 lg:w-24 bg-onSurface">
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
        <div className="col-span-3 flex flex-col  pt-6 lg:pl-12 pl-8">
          <p className="text-onSurface text-base lg:text-xl">{text}</p>
          <p className="text-sm text-onSurface opacity-50 pt-4">
            Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
          </p>
          {!auth.loading && user === auth.user._id && (
            <div className="flex pt-2 lg:pb-0 pb-2">
              <CustomButton
                color="white"
                bgcolor="danger"
                padding="1"
                paddingx="3"
                type="button"
                icon={icon3}
                onClick={() => deleteComment(postId, _id)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
