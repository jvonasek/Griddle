import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Score = ({ clicks }) => (
  <div className="Score">
    <div className="Score-label">CLICKS: <strong>{clicks}</strong></div>
  </div>
);

Score.propTypes = {
  clicks: PropTypes.number.isRequired,
};

export default Score;
