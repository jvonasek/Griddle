import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Dialog = ({ isOpen, title, text, buttons }) => {
  if (isOpen) {
    return (
      <div className="Dialog">
        <div className="Dialog-inner">
          <div className="text-large">{title}</div>
          <div className="text-large">{text}</div>
          {buttons && buttons.map(({ action, text }) =>
            <button className="Dialog-button" onClick={action}>{text}</button>
          )}
        </div>
      </div>
    );
  }

  return null;
}

Dialog.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.object),
  isOpen: PropTypes.bool,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Dialog.defaultProps = {
  buttons: [],
  isOpen: false,
};

export default Dialog;
