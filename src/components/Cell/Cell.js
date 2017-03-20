import React, { Component } from 'react'

import './Cell.css'

export default class Cell extends Component {
  getCellClassName(cell) {
    let classNames = []

    if (cell.active) {
      classNames.push('is-active')
    }

    return classNames.length ? ' ' + classNames.join(' ') : ''
  }

  render() {
    const { toggleCells, cell } = this.props

    return (
      <div
        style={{width: this.props.width + '%'}}
        className={'Cell' + this.getCellClassName(cell)}
        onClick={() => toggleCells({x: cell.x, y: cell.y})}>
        <div className="Cell-inner"></div>
      </div>
    )
  }
}

Cell.propTypes = {
  cell: React.PropTypes.object.isRequired,
  toggleCells: React.PropTypes.func.isRequired
}
