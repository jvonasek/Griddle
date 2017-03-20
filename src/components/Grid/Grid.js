import React, { Component } from 'react'
import _ from 'lodash'
import GSAP from 'react-gsap-enhancer'
import { TimelineMax, Elastic } from 'gsap'

import Cell from '../Cell'

import './Grid.css';

class Grid extends Component {

  componentDidMount() {
    this.addAnimation(this.createRevealAnim)
  }

  createRevealAnim({target}) {
    const items = target.findAll()
    return new TimelineMax()
      .set(items, {
        transformOrigin: '50% 50%'
      })
      .staggerFrom(items, 2, {
        rotationX: 90,
        opacity: 0,
        z: 180,
        scale: 0.5,
        ease: Elastic.easeOut.config(1, 0.9)
      }, 0.01)
  }

  renderCells(cells) {
    const cellWidth = 100 / this.props.xSize;
    return cells.map((cell) => {
      return <Cell width={cellWidth} key={cell.x + '-' + cell.y} cell={cell} toggleCells={this.props.toggleCells} />
    })
  }

  render() {
    const { cells } = this.props

    return (
      <div className="Grid clearfix">
        {this.renderCells(cells)}
      </div>
    )
  }
}

Grid.propTypes = {
  cells: React.PropTypes.array.isRequired,
  toggleCells: React.PropTypes.func.isRequired
}

export default GSAP()(Grid)
