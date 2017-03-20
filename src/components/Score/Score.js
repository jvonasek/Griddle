import React, { Component } from 'react'

import './Score.css'

export default class Score extends Component {

  render() {
    return (
      <div className="Score">
        <div className="Score-label">CLICKS: <strong>{this.props.score}</strong></div>
      </div>
    )
  }
}

Score.propTypes = {
  score: React.PropTypes.number.isRequired
}
