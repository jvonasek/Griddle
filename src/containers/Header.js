import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { newGame } from '../actions/';

import { getSeed, getPercent } from '../reducers';

import ProgressBar from '../components/ProgressBar';
import SeedInput from '../components/SeedInput';

const Header = ({ percent, seed, newGame }) => (
  <div className="Header">
    <ProgressBar percent={percent} />
    <SeedInput seed={seed} onSubmit={newGame} />
  </div>
);

Header.propTypes = {
  percent: PropTypes.number.isRequired,
  seed: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  percent: getPercent(state),
  seed: getSeed(state),
});

export default connect(
  mapStateToProps,
  { newGame }
)(Header);
