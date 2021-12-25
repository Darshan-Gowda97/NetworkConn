import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import CustomButton from '../partials/CustomButton';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div className="w-full h-auto mb-4">
      <form
        className=""
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          type="text"
          placeholder="  Leave a Comment"
          className="placeholder-onBackground text-onSurface bg-surface rounded text-sm border border-onSurface  w-full outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent"
          cols="30"
          rows="2"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        ></textarea>
        <div className="pt-3 pl-1">
          <CustomButton
            color="white"
            name="Submit"
            bgcolor="primary"
            padding="2"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
