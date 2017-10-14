import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.css';

const Cell = ({ width, cell, onClickHandler }) => (
  <div
    style={{ width: `${width}%` }}
    className={classNames({
      Cell: true,
      'is-active': cell.active,
    })}
    onClick={() => onClickHandler(cell)}
    role="button"
    tabIndex="0"
  >
    <div className="Cell-inner" />
  </div>
);

Cell.propTypes = {
  cell: PropTypes.objectOf(PropTypes.any).isRequired,
  onClickHandler: PropTypes.func,
  width: PropTypes.number,
};

Cell.defaultProps = {
  onClickHandler: () => {},
  width: 20,
};

export default Cell;
