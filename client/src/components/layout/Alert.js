import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div
      key={alert.id}
      className={
        'flex mt-2 justify-center items-center lg:ml-32 lg:mr-32 ml-10 mr-10 px-2 py-2 text-white bg-' +
        alert.alertType
      }
    >
      {alert.msg}
    </div>
  ));

Alert.propTypes = { alerts: PropTypes.func.isRequired };

//mapping redux state to props
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
