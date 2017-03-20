import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as GameActions from '../actions'

import Game from './Game';

const App = (store) => (
  <div className="App">
    <Game store={store} />
  </div>
)

App.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  grid: state.gridReducer,
  game: state.gameReducer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(GameActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
