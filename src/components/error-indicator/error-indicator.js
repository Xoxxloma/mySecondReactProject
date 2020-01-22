import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <i class="fa fa-exclamation-triangle err" />
      <span className="boom">OMG!</span>
      <span>
        something has gone wrong
      </span>
      <span>
        (but we know about it and will fix this one soon)
      </span>
    </div>
  );
};

export default ErrorIndicator;
