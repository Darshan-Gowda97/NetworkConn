import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div className="w-full bg-background pt-2 flex justify-center items-center">
      <div
        key={alert.id}
        className={
          'flex w-1/2 justify-center items-center lg:ml-32 lg:mr-32 ml-10 mr-10 px-2 py-2 text-white bg-' +
          alert.alertType
        }
      >
        {alert.msg}
      </div>
    </div>
  ));

Alert.propTypes = { alerts: PropTypes.func.isRequired };

//mapping redux state to props
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
