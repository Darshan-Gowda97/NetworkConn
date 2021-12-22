import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ImSpinner9 } from 'react-icons/im';
import { AiFillGithub } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { getGithubRepos } from '../../actions/profile';
import _ from 'lodash';

const ProfileGithub = ({ username, getGithubRepos, repos }) => {
  useEffect(() => {
    getGithubRepos(username);
  }, [getGithubRepos]);

  return (
    <div className="w-full my-1">
      <div className="flex gap-1">
        <IconContext.Provider value={{ color: '#D2D3D6', size: '25' }}>
          <AiFillGithub size={32} />
        </IconContext.Provider>
        <h2 className="text-2xl font-semibold text-onSurface pb-2">
          Github Repos
        </h2>
      </div>
      {repos === null ? (
        <div className="w-full h-full my-48 flex justify-center items-center">
          <ImSpinner9 size="40" className="text-primary animate-spin" />
        </div>
      ) : (
        _.map(repos, (repo) => (
          <div
            key={repo._id}
            className="grid grid-cols-3 w-full h-auto bg-surface my-4 pl-4 pt-2  pb-2 gap-2"
          >
            <div className="col-span-2">
              <a
                className="text-onSurface font-semibold text-lg"
                href={repo.html_url}
                target="_blank"
                rel="noopener norefer"
              >
                {repo.name}
              </a>
              <p className="text-onSurface opacity-75">{repo.description}</p>
            </div>
            <div className="lg:pl-8 pl-4">
              <ul className="text-onSurface">
                <li>Stars: {repo.stargazers_count}</li>
                <li>Watchers: {repo.watchers_count}</li>
                <li>Forks: {repo.forks_count}</li>
              </ul>
            </div>
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
