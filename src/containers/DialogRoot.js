import React from 'react';
import { connect } from 'react-redux';

import { getDialog } from '../reducers';

import Dialog from '../components/Dialog';

const mapStateToProps = (state) => ({
  ...getDialog(state),
});

export default connect(
  mapStateToProps,
)(Dialog);
