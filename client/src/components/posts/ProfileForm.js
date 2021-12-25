import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../partials/CustomButton';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const ProfileForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <div className="w-full h-auto my-4">
      {/* <div className="w-full h-auto border border-onSurface outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent">
        <h1 className="text-lg text-onSurface">Say Something...</h1>
      </div> */}
      <form
        className="mt-2"
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <textarea
          type="text"
          placeholder="  Add Post"
          className="placeholder-onBackground text-onSurface bg-surface rounded text-sm border border-onSurface  w-full outline-none focus:outline-none focus:ring-1 focus:ring-surface focus:border-transparent"
          cols="30"
          rows="3"
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

ProfileForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(ProfileForm);
