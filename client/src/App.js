import React, { Fragment } from 'react';
import './App.css';
import './index.css';
import { Landing } from './components/layout/Landing';
//Redux
import { Provider } from 'react-redux';
import store from './state/store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Landing />
      </Fragment>
    </Provider>
  );
};

export default App;
