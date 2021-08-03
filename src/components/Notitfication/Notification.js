import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ children, message, show }) => {
    return <>{show ? <div>{children}</div> : <p>{message}</p>}</>;
  };
    Notification.propTypes = {
    message: PropTypes.string,  
  };

  export default Notification;