import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const ProgressBar = ({ percent }) => (
  <div className="ProgressBar">
    <div className="ProgressBar-inner" style={{ width: `${percent}%` }} />
  </div>
);

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

export default ProgressBar;
