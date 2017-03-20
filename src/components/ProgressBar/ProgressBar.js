import React, { Component } from 'react'

import './ProgressBar.css'

export default class ProgressBar extends Component {

  render() {
    return (
      <div className="ProgressBar">
        <div className="ProgressBar-inner" style={{width: this.props.percent + '%'}}></div>
      </div>
    )
  }
}

ProgressBar.propTypes = {
  percent: React.PropTypes.number.isRequired
}
