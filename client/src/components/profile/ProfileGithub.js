import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImSpinner9 } from 'react-icons/im';
import { getGithubRepos } from '../../actions/profile';
import _ from 'lodash';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="my-1">
      <h2 className="text-2xl font-semibold text-onSurface">Github Repos</h2>
      {repos === null ? (
        <div className="w-full h-full my-48 flex justify-center items-center">
          <ImSpinner9 size="40" className="text-primary animate-spin" />
        </div>
      ) : (
        _.map(repos, (repo) => (
          <div key={repo._id} className="w-full h-auto bg-surface">
            <div></div>
          </div>
        ))
      )}
    </div>
  );
};

ProfileGithub.propTypes = {
  getGithubRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  repos: state.profile.repos,
});
export default connect(mapStateToProps, { getGithubRepos })(ProfileGithub);
