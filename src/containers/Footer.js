import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getClicks } from '../reducers';

import Score from '../components/Score';

const Footer = ({ clicks }) => (
  <div className="footer">
    <div className="footer-left">
      <Score clicks={clicks} />
      <div className="Hint">Get rid of red cells in least amount of clicks.</div>
    </div>
    {/*<div className="footer-right text-right">
      <button className="button" onClick={() => this.solveGame()}>solve game</button>
    </div>*/}
  </div>
);

Footer.propTypes = {
  clicks: PropTypes.number,
};

Footer.defaultProps = {
  clicks: 0,
};

const mapStateToProps = (state) => ({
  clicks: getClicks(state),
});


export default connect(
  mapStateToProps,
)(Footer);
